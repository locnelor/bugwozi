import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from '@app/prisma';
import { CoverModule } from '../cover/cover.module';

@Module({
  imports: [PrismaModule, CoverModule],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
})
export class PostsModule { } 