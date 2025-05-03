import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { ListModule } from './list/list.module';
import { AnalysisModule } from './analysis/analysis.module';
import { OrderController } from './order.controller';

@Module({
  providers: [OrderResolver, OrderService],
  imports: [ListModule, AnalysisModule],
  controllers: [OrderController],
})
export class OrderModule {}
