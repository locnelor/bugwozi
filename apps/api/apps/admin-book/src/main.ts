import { NestFactory } from '@nestjs/core';
import { AdminBookModule } from './admin-book.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminBookModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
