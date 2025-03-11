import { Test, TestingModule } from '@nestjs/testing';
import { AuthUtilService } from './auth-util.service';

describe('AuthUtilService', () => {
  let service: AuthUtilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthUtilService],
    }).compile();

    service = module.get<AuthUtilService>(AuthUtilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
