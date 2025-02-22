import { NestFactory } from '@nestjs/core';
import { BugwoziFileModule } from './bugwozi-file.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziFileModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
