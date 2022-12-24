import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('My API documentation')
    .setDescription('This is for API rest with Vuejs or Reactjs')
    .setVersion('1.0')
    .addTag('Clothes')
    .addTag('Electronics devices')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
    app.useGlobalPipes( new ValidationPipe())
    await app.listen(3000);
}
bootstrap();
