import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
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
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService]
})
export class AuthModule { }
