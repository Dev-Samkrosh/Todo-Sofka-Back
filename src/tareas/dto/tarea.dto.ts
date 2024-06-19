import { IsBoolean, IsOptional, IsString, isNotEmpty } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  id: string;

  @IsString()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsBoolean()
  @IsOptional()
  estado: boolean;
}

export class UpdateTareaDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsBoolean()
  @IsOptional()
  estado: boolean;
}
