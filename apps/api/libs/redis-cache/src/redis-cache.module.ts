import {DynamicModule, Global, Module} from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Global()
@Module({})
export class RedisCacheModule {
  static register(options: { host: string; port: number; password?: string }): DynamicModule {
    return {
      module: RedisCacheModule,
      imports: [
        RedisModule.forRoot({
          type: "single",
          options: {
            host: options.host,
            port: options.port,
            password: options.password,
          },
        }),
      ],
      providers: [RedisCacheService],
      exports: [RedisCacheService],
    };
  }
}