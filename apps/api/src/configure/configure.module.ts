import { Module } from '@nestjs/common';
import { ConfigureService } from './configure.service';

@Module({
  providers: [ConfigureService]
})
export class ConfigureModule {}
