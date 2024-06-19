import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TareasModule,
    AuthModule,
    UsuariosModule,
  ],
})
export class AppModule {}
