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
import { WechatModule } from './wechat/wechat.module';

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
        console.log(configService.get('server'));
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
    SystemModule,
    BlogModule,
    OrderModule,
    DashboardModule,
    WechatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
