import { NestFactory } from '@nestjs/core';
import { BugwoziModule } from './bugwozi.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
