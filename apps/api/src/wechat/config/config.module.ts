import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigResolver } from './config.resolver';

@Module({
  providers: [ConfigResolver, ConfigService],
})
export class ConfigModule {}
