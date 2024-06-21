import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo App - API Documentation')
    .setDescription('Description APIs regarding a CRUD Todo List')
    .setVersion('1.0')
    .addTag('Tareas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // Activamos validationpipe para todas las rutas
      whitelist: true, // Para que al pasar un dato que no se necesita lo ignore.
    }),
  );

  app.enableCors(); // Para que el front-end se pueda conectar sin problemas
  await app.listen(3000);
  console.log(`http://localhost:${3000}`);
}
bootstrap();
