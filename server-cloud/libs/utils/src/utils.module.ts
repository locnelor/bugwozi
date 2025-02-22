import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { RandomNameService } from './random-name/random-name.service';

@Module({
  providers: [UtilsService, RandomNameService],
  exports: [UtilsService],
})
export class UtilsModule {}
