import { Test, TestingModule } from '@nestjs/testing';
import { SysAuthController } from './sys-auth.controller';
import { SysAuthService } from './sys-auth.service';

describe('SysAuthController', () => {
  let sysAuthController: SysAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SysAuthController],
      providers: [SysAuthService],
    }).compile();

    sysAuthController = app.get<SysAuthController>(SysAuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sysAuthController.getHello()).toBe('Hello World!');
    });
  });
});
