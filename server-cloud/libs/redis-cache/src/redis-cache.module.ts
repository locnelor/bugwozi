import { Global, Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from '@nestjs-modules/ioredis';

@Global()
@Module({
  imports: [
    RedisModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          type: "single",
          options: {
            host: config.get("REDIS_HOST"),
            port: config.get("REDIS_PORT"),
            password: config.get("REDIS_PASSWORD")
          }
        }
      }
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule { }