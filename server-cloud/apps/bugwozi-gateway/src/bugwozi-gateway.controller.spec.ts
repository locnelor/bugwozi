import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziGatewayController } from './bugwozi-gateway.controller';
import { BugwoziGatewayService } from './bugwozi-gateway.service';

describe('BugwoziGatewayController', () => {
  let bugwoziGatewayController: BugwoziGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziGatewayController],
      providers: [BugwoziGatewayService],
    }).compile();

    bugwoziGatewayController = app.get<BugwoziGatewayController>(BugwoziGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
