import { Controller } from '@nestjs/common';
import { LocalService } from './local.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('local')
export class LocalController {
  constructor(
    private readonly service: LocalService
  ) { }

  @MessagePattern({
    login: "blog"
  })
  handleBlogLogin({ account, password }) {
    return this.service.blogLogin(account, password)
  }
}
