import { Module } from '@nestjs/common';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { TagModule } from './tag/tag.module';
import { KgnbModule } from './kgnb/kgnb.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { LikeModule } from './like/like.module';
import { SearchModule } from './search/search.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
    }),
    PostsModule,
    TagModule,
    KgnbModule,
    AuthModule,
    UserModule,
    CommentModule,
    CategoryModule,
    LikeModule,
    SearchModule,
    NotificationModule,
  ],
  controllers: [BugwoziBlogController],
  providers: [BugwoziBlogService],
})
export class BugwoziBlogModule { }
