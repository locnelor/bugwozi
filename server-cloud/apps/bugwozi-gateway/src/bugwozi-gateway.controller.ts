import { Controller, Get, Inject } from '@nestjs/common';
import { BugwoziGatewayService } from './bugwozi-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class BugwoziGatewayController {
  constructor(
    private readonly bugwoziGatewayService: BugwoziGatewayService,
    @Inject('BUGWOZI_AUTH')
    private readonly auth: ClientProxy
  ) { }

  @Get()
  getHello(): string {
    return this.bugwoziGatewayService.getHello();
  }

  @Get("auth")
  getAuth() {
    console.log("auth container")
    return this.auth.send({ cmd: 'login' }, { username: 'test', password: '123456' });
  }

  
}
