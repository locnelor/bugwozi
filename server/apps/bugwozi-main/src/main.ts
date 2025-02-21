import { NestFactory } from '@nestjs/core';
import { BugwoziMainModule } from './bugwozi-main.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziMainModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
