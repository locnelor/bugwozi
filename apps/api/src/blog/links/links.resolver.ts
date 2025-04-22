import { Resolver } from '@nestjs/graphql';
import { LinksService } from './links.service';

@Resolver()
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}
}
