import { Usuario } from 'src/auth/schemas/usuario.schema';
export declare class CreateTareaDto {
    titulo: string;
    descripcion: string;
    fechaDeVencimiento: string;
    estado: boolean;
    readonly usuario: Usuario;
}
