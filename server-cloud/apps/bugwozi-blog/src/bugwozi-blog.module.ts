import { Module } from '@nestjs/common';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
    }),
    PostsModule,
  ],
  controllers: [BugwoziBlogController],
  providers: [BugwoziBlogService],
})
export class BugwoziBlogModule { }
