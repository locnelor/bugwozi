import { Module } from '@nestjs/common';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { LikeModule } from './like/like.module';
import { SearchModule } from './search/search.module';
import { NotificationModule } from './notification/notification.module';
import { QuotesModule } from './quotes/quotes.module';

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
    PostsModule,
    TagModule,
    AuthModule,
    UserModule,
    CommentModule,
    CategoryModule,
    LikeModule,
    SearchModule,
    NotificationModule,
    QuotesModule,
  ],
  controllers: [BugwoziBlogController],
  providers: [
    BugwoziBlogService,
  ],
})
export class BugwoziBlogModule { }
