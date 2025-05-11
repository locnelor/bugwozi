import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaModule } from '@app/prisma';
import { CoverModule } from '../cover/cover.module';

@Module({
  imports: [PrismaModule, CoverModule],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService],
  controllers: [],
})
export class CategoriesModule { } 