import { Test, TestingModule } from '@nestjs/testing';
import { AuthPowerService } from './auth-power.service';

describe('AuthPowerService', () => {
  let service: AuthPowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthPowerService],
    }).compile();

    service = module.get<AuthPowerService>(AuthPowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
