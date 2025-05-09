import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaModule } from '@app/prisma';
import { FileModule } from '@app/file';
import { UtilsModule } from '@app/utils';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [PrismaModule, FileModule, UtilsModule],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule { } 