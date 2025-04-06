import { NestFactory } from '@nestjs/core';
import { SysAuthModule } from './sys-auth.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = Number(process.env.PORT_AUTH)
  if (!port) throw new Error('Expected port');
  const app = await NestFactory.createMicroservice(SysAuthModule, {
    transport: Transport.TCP,
    options: {
      port,
    },
  });

  await app.listen();
  console.log(`🚀 API AUTH running on http://localhost:${port}`);
}
bootstrap();
