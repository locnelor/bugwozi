import { NestFactory } from '@nestjs/core';
import { BugwoziAuthModule } from './bugwozi-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziAuthModule);
  console.log("auth")
  await app.listen(process.env.port ?? 3000);
}
bootstrap(); 
