import { Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}
}
