import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { BugwoziGatewayService } from './bugwozi-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Controller()
export class BugwoziGatewayController {
  constructor(
    private readonly bugwoziGatewayService: BugwoziGatewayService,
    @Inject('BUGWOZI_AUTH')
    private readonly authClient: ClientProxy,
    private readonly config: ConfigService,
    private readonly httpService: HttpService
  ) { }

  @Get()
  getHello() {
    return firstValueFrom(this.authClient.send({ cmd: "login" }, { a: 1, b: 2 }))
  }

  @Get("/blog/graphql")
  async getBlogGraphql(
    @Req() req: Request
  ) {
    const targetUrl = `http://localhost:${this.config.get("PORT_BLOG")}/graphql`
    const res = await firstValueFrom(
      this.httpService.get(targetUrl, {
        headers: req.headers
      })
    )
    return res.data
  }

  @Post("/blog/graphql")
  async getBlog(
    @Body() body: any,
    @Req() req: Request
  ) {
    const targetUrl = `http://localhost:${this.config.get("PORT_BLOG")}/graphql`
    const res = await firstValueFrom(this.httpService.post(targetUrl, body, {
      headers: req.headers
    }))
    return res.data
  }
}
