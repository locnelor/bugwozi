import { Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';

@Resolver()
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}
}
