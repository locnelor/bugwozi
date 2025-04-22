import { Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';

@Resolver()
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}
}
