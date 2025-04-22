import { Resolver } from '@nestjs/graphql';
import { MediaService } from './media.service';

@Resolver()
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}
}
