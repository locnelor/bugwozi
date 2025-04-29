import { Module } from '@nestjs/common';
import { BookkeepingResolver } from './bookkeeping.resolver';

@Module({
  providers: [BookkeepingResolver]
})
export class BookkeepingModule {}
