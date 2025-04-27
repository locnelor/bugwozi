import { Injectable, Logger } from '@nestjs/common';
import { WxService } from '../wx.service';
import { DefaultRequestResult } from '@app/wechat';

// 菜单按钮类型
export enum MenuButtonType {
  VIEW = 'view',          // 网页类型
  CLICK = 'click',        // 点击类型
  MINIPROGRAM = 'miniprogram', // 小程序类型
  SCANCODE_PUSH = 'scancode_push', // 扫码推事件
  SCANCODE_WAITMSG = 'scancode_waitmsg', // 扫码带提示
  PIC_SYSPHOTO = 'pic_sysphoto', // 系统拍照发图
  PIC_PHOTO_OR_ALBUM = 'pic_photo_or_album', // 拍照或者相册发图
  PIC_WEIXIN = 'pic_weixin', // 微信相册发图
  LOCATION_SELECT = 'location_select', // 发送位置
  MEDIA_ID = 'media_id', // 图片或语音
  VIEW_LIMITED = 'view_limited', // 图文消息
}

// 菜单按钮
export interface MenuButton {
  type: MenuButtonType;
  name: string;
  key?: string;
  url?: string;
  media_id?: string;
  appid?: string;
  pagepath?: string;
  sub_button?: MenuButton[];
}

// 菜单
export interface Menu {
  button: MenuButton[];
}

// 查询菜单结果
export interface GetMenuResult extends DefaultRequestResult {
  menu?: Menu;
  conditionalmenu?: any[];
  is_menu_open?: number;
  selfmenu_info?: any;
}

@Injectable()
export class MenuService {
  private readonly logger = new Logger(MenuService.name);

  constructor(private readonly wxService: WxService) {}

  /**
   * 创建微信公众号菜单
   * @param menu 菜单配置
   * @returns 创建结果
   */
  async createMenu(menu: Menu): Promise<DefaultRequestResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${token.access_token}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menu)
      });

      if (!response.ok) {
        throw new Error(`创建菜单失败: ${response.statusText}`);
      }

      const result = await response.json() as DefaultRequestResult;
      if (result.errcode !== 0) {
        this.logger.warn(`创建菜单返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log('创建菜单成功');
      }

      return result;
    } catch (error) {
      this.logger.error(`创建菜单失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 查询微信公众号菜单
   * @returns 查询结果
   */
  async getMenu(): Promise<GetMenuResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/menu/get?access_token=${token.access_token}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`查询菜单失败: ${response.statusText}`);
      }

      const result = await response.json() as GetMenuResult;
      if (result.errcode && result.errcode !== 0) {
        this.logger.warn(`查询菜单返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`查询菜单失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 删除微信公众号菜单
   * @returns 删除结果
   */
  async deleteMenu(): Promise<DefaultRequestResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${token.access_token}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`删除菜单失败: ${response.statusText}`);
      }

      const result = await response.json() as DefaultRequestResult;
      if (result.errcode !== 0) {
        this.logger.warn(`删除菜单返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log('删除菜单成功');
      }

      return result;
    } catch (error) {
      this.logger.error(`删除菜单失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 创建自定义菜单（个性化菜单）
   * @param menu 菜单配置
   * @param matchRule 匹配规则
   * @returns 创建结果，包含menuid
   */
  async addConditionalMenu(menu: Menu, matchRule: any): Promise<DefaultRequestResult & { menuid?: string }> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/menu/addconditional?access_token=${token.access_token}`;
      
      const data = {
        ...menu,
        matchrule: matchRule
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`创建个性化菜单失败: ${response.statusText}`);
      }

      const result = await response.json() as DefaultRequestResult & { menuid?: string };
      if (result.errcode !== 0) {
        this.logger.warn(`创建个性化菜单返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log(`创建个性化菜单成功，menuId: ${result.menuid}`);
      }

      return result;
    } catch (error) {
      this.logger.error(`创建个性化菜单失败: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 删除个性化菜单
   * @param menuId 菜单ID
   * @returns 删除结果
   */
  async deleteConditionalMenu(menuId: string): Promise<DefaultRequestResult> {
    try {
      const token = await this.wxService.getAccessToken();
      const url = `https://api.weixin.qq.com/cgi-bin/menu/delconditional?access_token=${token.access_token}`;
      
      const data = {
        menuid: menuId
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`删除个性化菜单失败: ${response.statusText}`);
      }

      const result = await response.json() as DefaultRequestResult;
      if (result.errcode !== 0) {
        this.logger.warn(`删除个性化菜单返回错误: errcode=${result.errcode}, errmsg=${result.errmsg}`);
      } else {
        this.logger.log('删除个性化菜单成功');
      }

      return result;
    } catch (error) {
      this.logger.error(`删除个性化菜单失败: ${error.message}`, error.stack);
      throw error;
    }
  }
}
