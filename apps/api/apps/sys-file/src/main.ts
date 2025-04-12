import { NestFactory } from '@nestjs/core';
import { SysFileModule } from './sys-file.module';

async function bootstrap() {
  const app = await NestFactory.create(SysFileModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
