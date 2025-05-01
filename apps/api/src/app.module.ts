import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { SystemModule } from './system/system.module';
import { BlogModule } from './blog/blog.module';
import { OrderModule } from './order/order.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { WeChatModule } from '@app/wechat';
import { WxModule } from './wx/wx.module';
import { BookkeepingModule } from './bookkeeping/bookkeeping.module';
import { BookModule } from './book/book.module';
import { RedisCacheModule } from '@app/redis-cache';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: (Joi.object({
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
        REDIS_PASSWORD: Joi.string().allow('').optional(),
        PORT: Joi.number().port().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES: Joi.string().required()
      })),
      cache: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          driver: ApolloDriver,
          subscriptions: {
            'graphql-ws': {
              onConnect: (context: any) => {
                const { connectionParams, extra } = context;
                const { Authorization } = connectionParams;
                extra.Authorization = Authorization;
              },
            },
          },
          autoSchemaFile: join(process.cwd(), 'schema.gql'),
          definitions: {
            path: join(__dirname, 'types/graphql.ts'),
          },
          playground: true,

          context: ({ req, res, connection = {} as any, extra }) => {
            const raw = req || connection.context || extra.request;
            if (
              !!extra?.Authorization &&
              !!raw.headers &&
              !raw.headers.authorization
            ) {
              raw.headers.authorization = extra?.Authorization;
            }
            return {
              req: raw,
              res,
              trackErrors(errors) {
                console.log('app.module', errors);
              },
            };
          },
        };
      },
    }),
    WeChatModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        appId: configService.get('WX_APPID'),
        secret: configService.get('WX_SECRET'),
        token: configService.get('WX_TOKEN'),
        encodingAESKey: configService.get('WX_AESKEY'),
        debug: true,
      }),
    }),
    RedisCacheModule.register({
      host: "localhost",
      port: 6379
    }),
    SystemModule,
    BlogModule,
    OrderModule,
    DashboardModule,
    WxModule,
    BookkeepingModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
