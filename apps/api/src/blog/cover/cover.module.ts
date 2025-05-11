import { Module } from '@nestjs/common';
import { CoverService } from './cover.service';
import { CoverResolver } from './cover.resolver';
import { CoverController } from './cover.controller';
import { FileModule } from '@app/file';
import { UtilsModule } from '@app/utils';

@Module({
  imports: [
    FileModule,
    UtilsModule
  ],
  providers: [CoverResolver, CoverService],
  controllers: [CoverController],
  exports: [CoverService]
})
export class CoverModule { }
