import { NestFactory } from '@nestjs/core';
import { BugwoziAuthModule } from './bugwozi-auth.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = Number(process.env.PORT_AUTH)
  const app = await NestFactory.createMicroservice(BugwoziAuthModule, {
    transport: Transport.TCP,
    options: {
      port,
    },
  });

  await app.listen();
  console.log(`🚀 API AUTH running on http://localhost:${port}`);

}
bootstrap(); 
