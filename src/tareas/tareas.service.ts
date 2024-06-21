import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from 'src/tareas/schemas/tarea.schema';
import { Model } from 'mongoose';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { Usuario } from 'src/auth/schemas/usuario.schema';

@Injectable()
export class TareasService {
  constructor(@InjectModel(Tarea.name) private tareaModel: Model<Tarea>) {}

  async createTareas(
    datosTarea: CreateTareaDto,
    usuario: Usuario,
  ): Promise<Tarea> {
    const datos = Object.assign(datosTarea, { usuario: usuario._id });

    const nuevaTarea = new this.tareaModel(datosTarea);

    return nuevaTarea.save();
  }

  async getTareas(): Promise<Tarea[]> {
    const tarea = await this.tareaModel.find();

    if (tarea.length == 0) {
      throw new NotFoundException('No hay tareas');
    }

    return tarea;
  }

  async getTareaPorId(id: string): Promise<Tarea> {
    const tarea = await this.tareaModel.findById(id);

    if (!tarea) {
      throw new NotFoundException(`No hay tareas con dicho id: ${id}`);
    }

    return tarea;
  }

  async updateTareas(id: string, camposActualizados: Tarea): Promise<Tarea> {
    const tarea = await this.tareaModel.findOneAndUpdate(
      { id: id },
      camposActualizados,
    );

    if (!tarea) {
      throw new NotFoundException(`No hay tareas con dicho id: ${id}`);
    }

    return tarea;
  }

  async deleteTareas(id: string): Promise<Tarea> {
    const tarea = await this.tareaModel.findOneAndDelete({ id: id });

    if (!tarea) {
      throw new NotFoundException(`No hay tareas con dicho id: ${id}`);
    }

    return tarea;
  }
}
