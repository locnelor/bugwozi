import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject("BUGWOZI_AUTH")
    private readonly authClient: ClientProxy
  ) { }
  send(
    pattern: any,
    data: any
  ) {
    return this.authClient.send(
      pattern,
      data
    )
  }

}
