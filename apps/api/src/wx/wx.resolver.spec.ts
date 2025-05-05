import { Test, TestingModule } from '@nestjs/testing';
import { WxResolver } from './wx.resolver';

describe('WxResolver', () => {
  let resolver: WxResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WxResolver],
    }).compile();

    resolver = module.get<WxResolver>(WxResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
