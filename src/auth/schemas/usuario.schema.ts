import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Usuario extends Document {
  @Prop({
    required: true,
  })
  @ApiProperty()
  nombre: string;

  @Prop({
    required: true,
    unique: true,
  })
  @ApiProperty()
  email: string;

  @Prop({
    required: true,
  })
  @ApiProperty()
  contrasena: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
