import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesResolver } from './quotes.resolver';
import { PrismaModule } from '@app/prisma';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule
  ],
  providers: [QuotesResolver, QuotesService],
})
export class QuotesModule { }
