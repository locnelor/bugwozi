import { DynamicModule, Global, Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { ConfigurableModuleClass } from './hash.module-defintion';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule],
  providers: [HashService],
  exports: [HashService],
})
@Global()
export class HashModule {
  static registerAsync(options: any): DynamicModule {
    return {
      module: HashModule,
      imports: options.imports || [],
      providers: [
        {
          provide: 'MODULE_OPTIONS_TOKEN',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ],
    };
  }
}
