import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestConfigurableModule } from './request.module-definition';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule extends RequestConfigurableModule {
  declare static register: typeof RequestConfigurableModule.register;
  declare static registerAsync: typeof RequestConfigurableModule.registerAsync;
}