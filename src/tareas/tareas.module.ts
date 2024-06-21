import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tarea, TareaSchema } from 'src/tareas/schemas/tarea.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Tarea.name, schema: TareaSchema }]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
