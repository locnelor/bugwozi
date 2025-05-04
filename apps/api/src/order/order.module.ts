import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { ListModule } from './list/list.module';
import { AnalysisModule } from './analysis/analysis.module';
import { OrderController } from './order.controller';
import { PrismaModule } from '@app/prisma';
import { HashModule } from '@app/hash';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [
    ListModule,
    AnalysisModule,
    PrismaModule,
    HashModule,
    GoodsModule
  ],
  providers: [OrderResolver, OrderService],
  controllers: [OrderController],
})
export class OrderModule { }
