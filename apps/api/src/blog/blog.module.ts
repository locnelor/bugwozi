import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TagModule } from './tag/tag.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { LinksModule } from './links/links.module';
import { AnnouncementsModule } from './announcements/announcements.module';

@Module({
  imports: [
    PostsModule,
    TagModule,
    CategoriesModule,
    CommentsModule,
    LinksModule,
    AnnouncementsModule,
  ],
})
export class BlogModule {}
