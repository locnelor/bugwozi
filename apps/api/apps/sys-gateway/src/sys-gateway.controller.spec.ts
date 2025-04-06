import { Test, TestingModule } from '@nestjs/testing';
import { SysGatewayController } from './sys-gateway.controller';
import { SysGatewayService } from './sys-gateway.service';

describe('SysGatewayController', () => {
  let sysGatewayController: SysGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SysGatewayController],
      providers: [SysGatewayService],
    }).compile();

    sysGatewayController = app.get<SysGatewayController>(SysGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sysGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
