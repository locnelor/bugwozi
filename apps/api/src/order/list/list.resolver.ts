import { Resolver } from '@nestjs/graphql';
import { ListService } from './list.service';

@Resolver()
export class ListResolver {
  constructor(private readonly listService: ListService) {}
}
