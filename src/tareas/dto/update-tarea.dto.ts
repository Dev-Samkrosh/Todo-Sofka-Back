import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Date } from 'mongoose';
import { Usuario } from 'src/auth/schemas/usuario.schema';

export class UpdateTareaDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  // @IsDate()
  // @IsOptional()
  // @Type(() => Date)
  // fechaDeVencimiento: Date;

  @IsBoolean()
  @IsOptional()
  estado: boolean;

  @IsEmpty({ message: 'No puedes pasar user id' })
  readonly usuario: Usuario;
}
