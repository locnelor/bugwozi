import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';

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
   * @param redis ioredis实例
   */
  constructor(@InjectRedis() private readonly redis: Redis) {}

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
      const result = await this.redis.get(key);
      if (result) {
        value = JSON.parse(result);
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
    const stringValue = JSON.stringify(value);
    
    if (ttl && ttl > 0) {
      return this.redis.set(key, stringValue, 'EX', ttl);
    } else {
      return this.redis.set(key, stringValue);
    }
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
      this.redis.del(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * 关闭连接
   */
  public close(): void {
    if (this.redis) {
      this.redis.quit();
    }
  }
}



