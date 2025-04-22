import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { ArticleModule } from './article/article.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { CommentsModule } from './comments/comments.module';
import { LinksModule } from './links/links.module';

@Module({
  providers: [BlogResolver, BlogService],
  imports: [ArticleModule, CategoriesModule, TagsModule, CommentsModule, LinksModule],
})
export class BlogModule {}
