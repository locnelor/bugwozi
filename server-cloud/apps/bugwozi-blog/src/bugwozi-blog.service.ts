import { Injectable } from '@nestjs/common';

@Injectable()
export class BugwoziBlogService {
  getHello(): string {
    return 'Hello World!';
  }
}
