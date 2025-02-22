import { Test, TestingModule } from '@nestjs/testing';
import { BugwoziFileController } from './bugwozi-file.controller';
import { BugwoziFileService } from './bugwozi-file.service';

describe('BugwoziFileController', () => {
  let bugwoziFileController: BugwoziFileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugwoziFileController],
      providers: [BugwoziFileService],
    }).compile();

    bugwoziFileController = app.get<BugwoziFileController>(BugwoziFileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bugwoziFileController.getHello()).toBe('Hello World!');
    });
  });
});
