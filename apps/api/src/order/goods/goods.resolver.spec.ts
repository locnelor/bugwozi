import { Test, TestingModule } from '@nestjs/testing';
import { GoodsResolver } from './goods.resolver';
import { GoodsService } from './goods.service';

describe('GoodsResolver', () => {
  let resolver: GoodsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodsResolver, GoodsService],
    }).compile();

    resolver = module.get<GoodsResolver>(GoodsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
