import { NestFactory } from '@nestjs/core';
import { BugwoziBlogModule } from './bugwozi-blog.module';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziBlogModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
