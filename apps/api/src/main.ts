import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
require('body-parser-xml')(bodyParser);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false,
    // httpsOptions:
    //   process.env.HTTPS_ENABLED === 'true'
    //     ? {
    //       key: FileService.getSSLKey(),
    //       cert: FileService.getSSLPem(),
    //     }
    //     : undefined,
    rawBody: true,
  });
  const configService: any = app.get(ConfigService);
  app.enableCors({
    origin: (origin, callback) => {
      callback(null, origin); // 允许任意来源
    },
    credentials: true,
  });

  app.use(
    bodyParser.xml({
      xmlParseOptions: {
        explicitArray: false, // 始终返回数组。默认情况下只有数组元素数量大于 1 是才返回数组。
      },
    }),
  );
  app.useBodyParser('text');
  app.useBodyParser('raw');
  app.useBodyParser('json', { limit: '10mb' });

  app.useGlobalPipes(new ValidationPipe());
  // set prefix
  // app.setGlobalPrefix("/api")

  app.useStaticAssets('build');
  app.useStaticAssets('resource');
  app.useStaticAssets('public');

  const options = new DocumentBuilder()
    .setTitle(<string>configService.get('TITLE'))
    .setDescription(<string>configService.get('DESCRIPTION'))
    .setVersion(<string>configService.get('VERSION'))
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);
  const port = configService.get('PORT');
  console.log(`Server running on port ${port}`);
  app.listen(port);
}

bootstrap();
