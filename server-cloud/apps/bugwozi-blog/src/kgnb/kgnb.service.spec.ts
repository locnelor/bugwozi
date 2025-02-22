import { Test, TestingModule } from '@nestjs/testing';
import { KgnbService } from './kgnb.service';

describe('KgnbService', () => {
  let service: KgnbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KgnbService],
    }).compile();

    service = module.get<KgnbService>(KgnbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
