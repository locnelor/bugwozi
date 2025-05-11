import { Test, TestingModule } from '@nestjs/testing';
import { CoverResolver } from './cover.resolver';
import { CoverService } from './cover.service';

describe('CoverResolver', () => {
  let resolver: CoverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverResolver, CoverService],
    }).compile();

    resolver = module.get<CoverResolver>(CoverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
