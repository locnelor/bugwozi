import { DynamicModule, Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule],
  providers: [HashService],
  exports: [HashService],
})
export class HashModule {
  // static registerAsync(options: any): DynamicModule {
  //   return {
  //     module: HashModule,
  //     imports: options.imports || [],
  //     providers: [
  //       {
  //         provide: 'MODULE_OPTIONS_TOKEN',
  //         useFactory: options.useFactory,
  //         inject: options.inject || [],
  //       },
  //     ],
  //   };
  // }
}
