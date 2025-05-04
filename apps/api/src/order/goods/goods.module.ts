import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsResolver } from './goods.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [GoodsResolver, GoodsService],
})
export class GoodsModule { }
