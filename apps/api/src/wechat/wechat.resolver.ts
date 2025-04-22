import { Resolver } from '@nestjs/graphql';
import { WechatService } from './wechat.service';

@Resolver()
export class WechatResolver {
  constructor(private readonly wechatService: WechatService) {}
}
