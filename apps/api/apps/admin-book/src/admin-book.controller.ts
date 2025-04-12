import { Controller, Get } from '@nestjs/common';
import { AdminBookService } from './admin-book.service';

@Controller()
export class AdminBookController {
  constructor(private readonly adminBookService: AdminBookService) {}

  @Get()
  getHello(): string {
    return this.adminBookService.getHello();
  }
}
