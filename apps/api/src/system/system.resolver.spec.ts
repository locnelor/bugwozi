import { Test, TestingModule } from '@nestjs/testing';
import { SystemResolver } from './system.resolver';

describe('SystemResolver', () => {
  let resolver: SystemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemResolver],
    }).compile();

    resolver = module.get<SystemResolver>(SystemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
