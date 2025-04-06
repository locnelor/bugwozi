import { Module } from '@nestjs/common';
import { BugwoziGatewayController } from './bugwozi-gateway.controller';
import { BugwoziGatewayService } from './bugwozi-gateway.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      timeout: 5000
    }),
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
    })
  ],
  controllers: [BugwoziGatewayController],
  providers: [BugwoziGatewayService],
})
export class BugwoziGatewayModule { }
