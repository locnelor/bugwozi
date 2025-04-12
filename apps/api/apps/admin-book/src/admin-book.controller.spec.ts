import { Test, TestingModule } from '@nestjs/testing';
import { AdminBookController } from './admin-book.controller';
import { AdminBookService } from './admin-book.service';

describe('AdminBookController', () => {
  let adminBookController: AdminBookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminBookController],
      providers: [AdminBookService],
    }).compile();

    adminBookController = app.get<AdminBookController>(AdminBookController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminBookController.getHello()).toBe('Hello World!');
    });
  });
});
