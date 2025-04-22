import { Test, TestingModule } from '@nestjs/testing';
import { WechatResolver } from './wechat.resolver';
import { WechatService } from './wechat.service';

describe('WechatResolver', () => {
  let resolver: WechatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WechatResolver, WechatService],
    }).compile();

    resolver = module.get<WechatResolver>(WechatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
