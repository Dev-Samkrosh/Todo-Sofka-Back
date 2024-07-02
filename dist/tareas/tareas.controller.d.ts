import { TareasService } from './tareas.service';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Tarea } from 'src/tareas/schemas/tarea.schema';
import { CreateTareaDto } from './dto/create-tarea.dto';
export declare class TareasController {
    private tareasService;
    constructor(tareasService: TareasService);
    getTareas(req: any): Promise<Tarea[]>;
    createTareas(datosTarea: CreateTareaDto, req: any): Promise<Tarea>;
    updateTareas(id: string, camposActualizados: UpdateTareaDto): Promise<Tarea>;
    deleteTareas(id: string): Promise<Tarea>;
}
