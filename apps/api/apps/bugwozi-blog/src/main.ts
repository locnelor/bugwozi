import { NestFactory } from '@nestjs/core';
import { BugwoziBlogModule } from './bugwozi-blog.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziBlogModule);
  await app.startAllMicroservices();
  const configService = app.get(ConfigService)
  const port = configService.get("PORT_BLOG")
  if (!port) throw new Error('No port');
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 1 * configService.get("PORT_AUTH"), // Auth 子服务监听的端口
    },
  });
  await app.listen(port);
  console.log(`🚀 API BLOG running on http://localhost:${port}`);
}
bootstrap();
