import { NestFactory } from '@nestjs/core';
import { BugwoziBlogModule } from './bugwozi-blog.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(BugwoziBlogModule);

  const config = app.get(ConfigService)
  const port = config.get("PORT_BLOG")
  await app.listen(port);
  console.log(`🚀 API BLOG running on http://localhost:${port}`);
}
bootstrap();
