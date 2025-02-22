
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PostsResolver {

  @Query(() => String)
  hello() {
    return "hello"
  }
}
