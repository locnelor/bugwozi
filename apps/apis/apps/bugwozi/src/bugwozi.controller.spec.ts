import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziController } from './bugwozi.controller';
import { BugwoziService } from './bugwozi.service';

describe('BugwoziController', () => {
  let bugwoziController: BugwoziController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziController],
      providers: [BugwoziService],
    }).compile();

    bugwoziController = app.get<BugwoziController>(BugwoziController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziController.getHello()).toBe('Hello World!');
    });
  });
});
