import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TareaDocument = HydratedDocument<Tarea>;

@Schema()
export class Tarea {
  @Prop({
    required: true,
    trim: true,
  })
  id: string;

  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop({
    required: true,
    default: false,
  })
  estado: boolean;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);
