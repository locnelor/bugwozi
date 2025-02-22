import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziJobController } from './bugwozi-job.controller';
import { BugwoziJobService } from './bugwozi-job.service';

describe('BugwoziJobController', () => {
  let bugwoziJobController: BugwoziJobController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziJobController],
      providers: [BugwoziJobService],
    }).compile();

    bugwoziJobController = app.get<BugwoziJobController>(BugwoziJobController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziJobController.getHello()).toBe('Hello World!');
    });
  });
});
