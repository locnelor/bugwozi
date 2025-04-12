import { Test, TestingModule } from '@nestjs/testing';
import { SysFileController } from './sys-file.controller';
import { SysFileService } from './sys-file.service';

describe('SysFileController', () => {
  let sysFileController: SysFileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SysFileController],
      providers: [SysFileService],
    }).compile();

    sysFileController = app.get<SysFileController>(SysFileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sysFileController.getHello()).toBe('Hello World!');
    });
  });
});
