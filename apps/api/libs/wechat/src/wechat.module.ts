import { DynamicModule, Global, Module, Provider } from '@nestjs/common';

import { WeChatModuleOptions, WeChatModuleRootOptions } from '.';
import { WECHAT_MODULE_OPTIONS } from './wechat.constants';
import { WeChatService } from './wechat.service';
import { WePayService } from './wepay.service';

@Module({})
@Global()
export class WeChatModule {

  public static register(options: WeChatModuleOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: WeChatModule,
      providers: [{
        provide: WeChatService,
        useValue: new WeChatService(options),
      }],
      exports: [WeChatService],
    };
  }

  public static forRootAsync(options: WeChatModuleRootOptions): DynamicModule {
    const providers: Provider[] = [];
    if (options.useFactory) {
      providers.push({
        provide: WECHAT_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      });
    }
    providers.push({
      provide: WeChatService,
      inject: [WECHAT_MODULE_OPTIONS],
      useFactory: (opt: WeChatModuleOptions) => {
        return new WeChatService(opt);
      },
    });
    providers.push({
      provide: WePayService,
      inject: [],
      useFactory: (opt: WeChatModuleOptions) => {
        return new WePayService(opt)
      }
    })
    return {
      global: options.isGlobal,
      module: WeChatModule,
      imports: options.imports,
      providers,
      exports: [WeChatService, WePayService],
    };
  }
}