import { Body, Controller, Post } from '@nestjs/common';

@Controller('wechat')
export class WxController {
  constructor(
    private readonly 
  ){}

  @Post("handle")
  handle(
    @Body() body
  ) { 
    console.log(body)
  }
}
