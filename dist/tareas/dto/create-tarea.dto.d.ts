import { Usuario } from 'src/auth/schemas/usuario.schema';
export declare class CreateTareaDto {
    id: string;
    titulo: string;
    descripcion: string;
    estado: boolean;
    readonly usuario: Usuario;
}
