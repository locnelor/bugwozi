import { Controller, Get } from '@nestjs/common';
import { StudyRoomService } from './study-room.service';

@Controller()
export class StudyRoomController {
  constructor(private readonly studyRoomService: StudyRoomService) {}

  @Get()
  getHello(): string {
    return this.studyRoomService.getHello();
  }
}
