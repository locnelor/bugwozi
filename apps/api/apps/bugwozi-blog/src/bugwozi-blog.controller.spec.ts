import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziBlogController } from './bugwozi-blog.controller';
import { BugwoziBlogService } from './bugwozi-blog.service';

describe('BugwoziBlogController', () => {
  let bugwoziBlogController: BugwoziBlogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziBlogController],
      providers: [BugwoziBlogService],
    }).compile();

    bugwoziBlogController = app.get<BugwoziBlogController>(BugwoziBlogController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziBlogController.getHello()).toBe('Hello World!');
    });
  });
});
