import { Test, TestingModule } from '@nestjs/testing';
import { ConfigureService } from './configure.service';

describe('ConfigureService', () => {
  let service: ConfigureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigureService],
    }).compile();

    service = module.get<ConfigureService>(ConfigureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
