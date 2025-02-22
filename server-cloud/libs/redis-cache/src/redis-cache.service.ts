import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from "ioredis"
import { Injectable } from '@nestjs/common';
@Injectable()
export class RedisCacheService extends Redis {
  constructor(
    @InjectRedis() public readonly redis: Redis
  ) {
    super(redis.options);
  }
}
