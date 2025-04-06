import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestConfigurableModule } from './request.module-definition';

@Module({
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule extends RequestConfigurableModule {
  declare static register: typeof RequestConfigurableModule.register;
  declare static registerAsync: typeof RequestConfigurableModule.registerAsync;
}