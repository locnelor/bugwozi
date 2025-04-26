import { Test, TestingModule } from '@nestjs/testing';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';

describe('MenuResolver', () => {
  let resolver: MenuResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuResolver, MenuService],
    }).compile();

    resolver = module.get<MenuResolver>(MenuResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
