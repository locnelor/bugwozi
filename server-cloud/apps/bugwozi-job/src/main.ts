import { NestFactory } from '@nestjs/core';
import { BugwoziJobModule } from './bugwozi-job.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziJobModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
