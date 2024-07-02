import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { Usuario } from 'src/auth/schemas/usuario.schema';

export type TareaDocument = HydratedDocument<Tarea>;

@Schema({
  timestamps: true,
})
export class Tarea {
  @Prop({
    required: true,
    trim: true,
  })
  @ApiProperty()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  fechaDeVencimiento: string; //! Revisar este tipo de dato

  @Prop({
    required: true,
    default: false,
  })
  @ApiProperty()
  estado: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  })
  @ApiProperty()
  usuario: Usuario;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);
