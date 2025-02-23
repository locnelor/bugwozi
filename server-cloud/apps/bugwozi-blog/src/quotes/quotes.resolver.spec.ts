import { Test, TestingModule } from '@nestjs/testing';
import { QuotesResolver } from './quotes.resolver';
import { QuotesService } from './quotes.service';

describe('QuotesResolver', () => {
  let resolver: QuotesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotesResolver, QuotesService],
    }).compile();

    resolver = module.get<QuotesResolver>(QuotesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
