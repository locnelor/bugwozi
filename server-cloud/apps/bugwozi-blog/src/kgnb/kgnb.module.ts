import { Module } from '@nestjs/common';
import { KgnbService } from './kgnb.service';
import { KgnbResolver } from './kgnb.resolver';

@Module({
  providers: [KgnbResolver, KgnbService],
})
export class KgnbModule {}
