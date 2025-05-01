import { Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

export interface ICache {
  get<T>(key: string): Promise<T>;
  set(key: string, value: any, ttl?: number): Promise<any>;
  remove(key: string): boolean;
  close(): void;
}

/**
 * Redis缓存实现类
 */
@Injectable()
export class RedisCache implements ICache {
  private namespace = 'nest-cache:';

  /**
   * 构造函数
   * @param cache cache manager 实例
   */
  constructor(private readonly cache: Cache) {}

  /**
   * 获取缓存
   * @param key 缓存键
   * @returns 缓存值
   */
  public async get<T>(key: string): Promise<T> {
    if (!key) {
      throw new Error('empty key');
    }
    
    key = this.namespace + key;
    let value = {};
    
    try {
      value = await this.cache.get<T>(key) as T;
      if (!value) {
        value = {};
      }
    } catch (error) {
      value = {};
    }
    
    return value as T;
  }

  /**
   * 设置缓存
   * @param key 缓存键
   * @param value 缓存值
   * @param ttl 过期时间（秒）
   * @returns 操作结果
   */
  public async set(key: string, value: any, ttl?: number): Promise<any> {
    if (!key) {
      throw new Error('empty key');
    }
    
    key = this.namespace + key;
    if (!ttl) {
      ttl = 0;
    }
    
    return this.cache.set(key, value, { ttl });
  }

  /**
   * 删除缓存
   * @param key 缓存键
   * @returns 是否成功
   */
  public remove(key: string): boolean {
    if (!key) return false;
    
    key = this.namespace + key;
    try {
      this.cache.del(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * 关闭连接
   */
  public close(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (this.cache.store as any).getClient === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const client = (this.cache.store as any).getClient();
      if (client) {
        client.quit();
      }
    }
  }
}



