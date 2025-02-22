import { ConfigurableModuleBuilder } from '@nestjs/common';
import { RequestModuleOptions } from './request.module.interface';

export const { ConfigurableModuleClass: RequestConfigurableModule, MODULE_OPTIONS_TOKEN: REQUEST_MODULE_OPTIONS_TOKEN } =
    new ConfigurableModuleBuilder<RequestModuleOptions>({ moduleName: 'Request' })
        .build();
