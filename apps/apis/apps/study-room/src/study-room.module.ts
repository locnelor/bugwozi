import { Module } from '@nestjs/common';
import { StudyRoomController } from './study-room.controller';
import { StudyRoomService } from './study-room.service';
import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        REDIS_HOST: Joi.string(),
        REDIS_PORT: Joi.number(),
        REDIS_PASSWORD: Joi.string().empty(""),
        PORT: Joi.number().port(),
        JWT_SECRET: Joi.string(),
        JWT_EXPIRES: Joi.any(),
        WEBSITE_RANDOM_HOME: Joi.number()
      }),
      cache: true
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get("server"))
        return {
          driver: ApolloDriver,
          subscriptions: {
            'graphql-ws': {
              onConnect: (context: any) => {
                const {
                  connectionParams,
                  extra
                } = context;
                const { Authorization } = connectionParams;
                extra.Authorization = Authorization;
              },
            }
          },
          autoSchemaFile: join(process.cwd(), 'schema.gql'),
          definitions: {
            path: join(__dirname, 'types/graphql.ts'),
          },
          playground: true,

          context: ({ req, res, connection = {} as any, extra }) => {
            const raw = (req || connection.context || extra.request)
            if (!!extra?.Authorization && !!raw.headers && !raw.headers.authorization) {
              raw.headers.authorization = extra?.Authorization
            }
            return {
              req: raw,
              res,
              trackErrors(errors) {
                console.log("app.module", errors)
              },
            };
          },
        }
      }
    }),
    AuthModule,
  ],
  controllers: [StudyRoomController],
  providers: [StudyRoomService],
})
export class StudyRoomModule {}
