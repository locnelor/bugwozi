import { Test, TestingModule } from '@nestjs/testing';
import { KgnbResolver } from './kgnb.resolver';
import { KgnbService } from './kgnb.service';

describe('KgnbResolver', () => {
  let resolver: KgnbResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KgnbResolver, KgnbService],
    }).compile();

    resolver = module.get<KgnbResolver>(KgnbResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
