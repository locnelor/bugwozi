import { Test, TestingModule } from '@nestjs/testing';
import { StudyRoomController } from './study-room.controller';
import { StudyRoomService } from './study-room.service';

describe('StudyRoomController', () => {
  let studyRoomController: StudyRoomController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudyRoomController],
      providers: [StudyRoomService],
    }).compile();

    studyRoomController = app.get<StudyRoomController>(StudyRoomController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(studyRoomController.getHello()).toBe('Hello World!');
    });
  });
});
