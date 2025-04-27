import { Injectable, Logger } from '@nestjs/common';
import { WxService } from '../wx.service';
import { DefaultRequestResult } from '@app/wechat';
import { createReadStream } from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';

// 媒体文件类型
export enum MediaType {
  IMAGE = 'image',
  VOICE = 'voice',
  VIDEO = 'video',
  THUMB = 'thumb',
}

// 媒体文件上传结果
export interface UploadMediaResult extends DefaultRequestResult {
  type?: string;
  media_id?: string;
  created_at?: number;
}

// 获取媒体文件结果
export interface GetMediaResult extends DefaultRequestResult {
  video_url?: string;
}

// 图文消息 - 图文item
export interface NewsItem {
  thumb_media_id: string;
  author?: string;
  title: string;
  content_source_url?: string;
  content: string;
  digest?: string;
  show_cover_pic?: 0 | 1;
  need_open_comment?: 0 | 1;
  only_fans_can_comment?: 0 | 1;
}

// 图文消息
export interface NewsMessage {
  articles: NewsItem[];
}

// 图文消息上传结果
export interface UploadNewsResult extends DefaultRequestResult {
  media_id?: string;
  created_at?: number;
}

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);

  constructor(private readonly wxService: WxService) {}

  /**
   * 上传临时素材
   * @param filePath 文件路径
   * @param type 媒体文件类型
   * @returns 上传结果
   */
  async uploadMedia(filePath: string, type: MediaType): Promise<UploadMediaResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${token.access_token}&type=${type}`;
      
      const formData = new FormData();
      formData.append('media', createReadStream(filePath));
      
      const response = await axios.post(url, formData, {
        headers: formData.getHeaders(),
        maxBodyLength: 10 * 1024 * 1024, // 设置最大为10MB
      });

      const result = response.data as UploadMediaResult;
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`上传临时素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log(`上传临时素材成功，media_id: ${result.media_id}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`上传临时素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 获取临时素材
   * @param mediaId 媒体文件ID
   * @returns 获取结果
   */
  async getMedia(mediaId: string): Promise<GetMediaResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/media/get?access_token=${token.access_token}&media_id=${mediaId}`;
      
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      // 检查是否是JSON响应（错误情况）
      const contentType = response.headers['content-type'];
      if (contentType && contentType.includes('application/json')) {
        const result = JSON.parse(response.data.toString()) as GetMediaResult;
        this.logger.warn(`获取临时素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
        return result;
      }

      // 二进制响应
      this.logger.log(`获取临时素材成功，content-type: ${contentType}`);
      
      return {
        errcode: 0,
        errmsg: 'ok',
      };
    } catch (error) {
      this.logger.error(`获取临时素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 上传图文消息素材
   * @param news 图文消息
   * @returns 上传结果
   */
  async uploadNews(news: NewsMessage): Promise<UploadNewsResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/media/uploadnews?access_token=${token.access_token}`;
      
      const response = await axios.post(url, news);

      const result = response.data as UploadNewsResult;
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`上传图文消息素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log(`上传图文消息素材成功，media_id: ${result.media_id}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`上传图文消息素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 上传图文消息内的图片
   * @param filePath 图片路径
   * @returns 上传结果，包含url地址
   */
  async uploadImage(filePath: string): Promise<DefaultRequestResult & { url?: string }> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=${token.access_token}`;
      
      const formData = new FormData();
      formData.append('media', createReadStream(filePath));
      
      const response = await axios.post(url, formData, {
        headers: formData.getHeaders(),
        maxBodyLength: 10 * 1024 * 1024, // 设置最大为10MB
      });

      const result = response.data as DefaultRequestResult & { url?: string };
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`上传图文消息内的图片返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log(`上传图文消息内的图片成功，url: ${result.url}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`上传图文消息内的图片失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 上传永久素材
   * @param filePath 文件路径
   * @param type 媒体文件类型
   * @returns 上传结果
   */
  async addMaterial(filePath: string, type: MediaType): Promise<UploadMediaResult & { url?: string }> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token.access_token}&type=${type}`;
      
      const formData = new FormData();
      formData.append('media', createReadStream(filePath));
      
      // 如果是视频素材，需要description
      if (type === MediaType.VIDEO) {
        const description = {
          title: '视频素材标题',
          introduction: '视频素材简介',
        };
        formData.append('description', JSON.stringify(description));
      }
      
      const response = await axios.post(url, formData, {
        headers: formData.getHeaders(),
        maxBodyLength: 10 * 1024 * 1024, // 设置最大为10MB
      });

      const result = response.data as UploadMediaResult & { url?: string };
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`上传永久素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log(`上传永久素材成功，media_id: ${result.media_id}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`上传永久素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 获取永久素材
   * @param mediaId 媒体文件ID
   * @returns 获取结果
   */
  async getMaterial(mediaId: string): Promise<any> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=${token.access_token}`;
      
      const response = await axios.post(url, { media_id: mediaId }, {
        responseType: 'arraybuffer',
      });

      // 检查是否是JSON响应
      const contentType = response.headers['content-type'];
      if (contentType && contentType.includes('application/json')) {
        try {
          const result = JSON.parse(response.data.toString());
          if (result.errcode && result.errcode !== 0) {
            this.logger.warn(`获取永久素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
          }
          return result;
        } catch (e) {
          // 非错误的JSON响应
          return {
            errcode: 0,
            errmsg: 'ok',
            data: response.data,
            contentType,
          };
        }
      }

      // 二进制响应
      this.logger.log(`获取永久素材成功，content-type: ${contentType}`);
      
      return {
        errcode: 0,
        errmsg: 'ok',
        data: response.data,
        contentType,
      };
    } catch (error) {
      this.logger.error(`获取永久素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 删除永久素材
   * @param mediaId 媒体文件ID
   * @returns 删除结果
   */
  async deleteMaterial(mediaId: string): Promise<DefaultRequestResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/material/del_material?access_token=${token.access_token}`;
      
      const response = await axios.post(url, { media_id: mediaId });

      const result = response.data as DefaultRequestResult;
      if (result.errcode !== 0) {
        this.logger.warn(`删除永久素材返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log('删除永久素材成功');
      }

      return result;
    } catch (error) {
      this.logger.error(`删除永久素材失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 获取素材总数
   * @returns 素材总数
   */
  async getMaterialCount(): Promise<DefaultRequestResult & {
    voice_count?: number;
    video_count?: number;
    image_count?: number;
    news_count?: number;
  }> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${token.access_token}`;
      
      const response = await axios.get(url);

      const result = response.data;
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`获取素材总数返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log('获取素材总数成功');
      }

      return result;
    } catch (error) {
      this.logger.error(`获取素材总数失败: ${error.message}`, error.stack);
      throw error;
    }
  }
}
