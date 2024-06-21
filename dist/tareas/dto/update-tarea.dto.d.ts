import { Usuario } from 'src/auth/schemas/usuario.schema';
export declare class UpdateTareaDto {
    id: string;
    titulo: string;
    descripcion: string;
    estado: boolean;
    readonly usuario: Usuario;
}
