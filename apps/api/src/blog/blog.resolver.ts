import { Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';

@Resolver()
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}
}
