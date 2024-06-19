import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Para que el front-end se pueda conectar sin problemas
  await app.listen(3000);
  console.log(`http://localhost:${3000}`);

  app.useGlobalPipes(
    new ValidationPipe({
      // Activamos validationpipe para todas las rutas
      whitelist: true, // Para que al pasar un dato que no se necesita lo ignore.
    }),
  );
}
bootstrap();
