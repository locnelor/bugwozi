import { Module } from '@nestjs/common';
import { SysGatewayController } from './sys-gateway.controller';
import { SysGatewayService } from './sys-gateway.service';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

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
  controllers: [SysGatewayController],
  providers: [SysGatewayService],
})
export class SysGatewayModule {}
