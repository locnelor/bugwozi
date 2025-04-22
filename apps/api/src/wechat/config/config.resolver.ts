import { Resolver } from '@nestjs/graphql';
import { ConfigService } from './config.service';

@Resolver()
export class ConfigResolver {
  constructor(private readonly configService: ConfigService) {}
}
