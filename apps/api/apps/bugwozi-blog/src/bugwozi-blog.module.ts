import { Module } from '@nestjs/common';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async () => {
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
          autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
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
  ],
  controllers: [BugwoziBlogController],
  providers: [
    BugwoziBlogService,
  ],
})
export class BugwoziBlogModule { }
