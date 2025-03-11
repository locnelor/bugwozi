import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { AuthUtilModule } from '@app/auth-util';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register({
      clients: [
        {
          name: 'BUGWOZI_AUTH',
          transport: Transport.TCP,
          options: {
            port: Number(process.env.PORT_AUTH)
          },
        },
      ]
    }),
    AuthUtilModule
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService]
})
export class AuthModule { }
