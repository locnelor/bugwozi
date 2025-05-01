import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { RandomNameService } from './random-name/random-name.service';

@Module({
  providers: [UtilsService, RandomNameService],
  exports: [UtilsService, RandomNameService],
})
export class UtilsModule { }
