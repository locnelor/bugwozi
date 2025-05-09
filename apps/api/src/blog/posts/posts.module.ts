import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from '@app/prisma';
import { FileModule } from '@app/file';
import { UtilsModule } from '@app/utils';
import { PostsController } from './posts.controller';

@Module({
  imports: [PrismaModule,FileModule,UtilsModule],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {} 