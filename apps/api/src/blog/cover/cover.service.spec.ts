import { Test, TestingModule } from '@nestjs/testing';
import { CoverService } from './cover.service';

describe('CoverService', () => {
  let service: CoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverService],
    }).compile();

    service = module.get<CoverService>(CoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
