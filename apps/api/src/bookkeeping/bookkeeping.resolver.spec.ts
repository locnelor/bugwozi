import { Test, TestingModule } from '@nestjs/testing';
import { BookkeepingResolver } from './bookkeeping.resolver';

describe('BookkeepingResolver', () => {
  let resolver: BookkeepingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookkeepingResolver],
    }).compile();

    resolver = module.get<BookkeepingResolver>(BookkeepingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
