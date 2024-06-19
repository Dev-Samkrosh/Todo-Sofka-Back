import { Injectable } from '@nestjs/common';
import { CreateTareaDto, UpdateTareaDto } from './dto/tarea.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from 'src/schemas/tarea.schema';
import { Model } from 'mongoose';

@Injectable()
export class TareasService {
  // ? Aún no se ha implementado la base de datos del todo
  constructor(@InjectModel(Tarea.name) private tareaModel: Model<Tarea>) {}

  //!!! Simula la DB temporalmente !!! Debe ser cambiada junto con los métodos abajo
  //   private tareas: Tarea[] = [
  //     {
  //       id: '1',
  //       titulo: 'prueba',
  //       descripcion: 'prueba',
  //       estado: false,
  //     },
  //   ];

  //   createTareas(
  //     id: string,
  //     titulo: string,
  //     descripcion: string,
  //     estado: boolean,
  //   ) {
  //     const tarea = {
  //       id,
  //       titulo,
  //       descripcion,
  //       estado,
  //     };
  //     this.tareas.push(tarea);
  //   }

  //   getTareas() {
  //     return this.tareas;
  //   }

  //   getTareaPorId(id: string): TareaEntity {
  //     return this.tareas.find((tarea) => tarea.id === id);
  //   }

  //   updateTareas(id: string, camposActualizados: UpdateTareaDto) {
  //     //!!! Tiene un error Cannot convert undefinend or null to object
  //     //! Faltan excepciones y condicionales
  //     const tarea = this.getTareaPorId(id);
  //     const nuevaTarea = Object.assign(tarea, camposActualizados);

  //     this.tareas = this.tareas.map((tarea) =>
  //       tarea.id === id ? nuevaTarea : tarea,
  //     );

  //     return nuevaTarea;
  //   }

  //   deleteTareas(id: string) {
  //     this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  //     console.log(this.tareas);
  //   }
  // }

  async createTareas(datosTarea: CreateTareaDto) {
    const nuevaTarea = new this.tareaModel(datosTarea);
    return nuevaTarea.save();
  }

  async getTareas(): Promise<Tarea[]> {
    return await this.tareaModel.find();
  }

  async getTareaPorId(id: string): Promise<Tarea> {
    return await this.tareaModel.findById(id);
  }

  async updateTareas(id: string, camposActualizados: Tarea): Promise<Tarea> {
    return await this.tareaModel.findOneAndUpdate(
      { id: id },
      camposActualizados,
    );
  }

  async deleteTareas(id: string): Promise<Tarea> {
    return await this.tareaModel.findOneAndDelete({ id: id });
  }
}
