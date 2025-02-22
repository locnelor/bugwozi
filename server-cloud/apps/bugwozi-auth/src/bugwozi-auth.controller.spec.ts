import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziAuthController } from './bugwozi-auth.controller';
import { BugwoziAuthService } from './bugwozi-auth.service';

describe('BugwoziAuthController', () => {
  let bugwoziAuthController: BugwoziAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziAuthController],
      providers: [BugwoziAuthService],
    }).compile();

    bugwoziAuthController = app.get<BugwoziAuthController>(BugwoziAuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziAuthController.getHello()).toBe('Hello World!');
    });
  });
});
