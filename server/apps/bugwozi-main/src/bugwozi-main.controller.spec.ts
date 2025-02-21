import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziMainController } from './bugwozi-main.controller';
import { BugwoziMainService } from './bugwozi-main.service';

describe('BugwoziMainController', () => {
  let bugwoziMainController: BugwoziMainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziMainController],
      providers: [BugwoziMainService],
    }).compile();

    bugwoziMainController = app.get<BugwoziMainController>(BugwoziMainController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziMainController.getHello()).toBe('Hello World!');
    });
  });
});
