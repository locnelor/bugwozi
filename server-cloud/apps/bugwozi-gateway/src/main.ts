import { NestFactory } from '@nestjs/core';
import { BugwoziGatewayModule } from './bugwozi-gateway.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziGatewayModule);

  // 读取 .env 配置
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT_GATEWAY') || 3000;
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 1 * configService.get("PORT_AUTH"), // Auth 子服务监听的端口
    },
  });
  await app.startAllMicroservices();
  await app.listen(port);
  console.log(`🚀 API Gateway running on http://localhost:${port}`);
}
bootstrap();
