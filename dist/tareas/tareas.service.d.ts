/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateTareaDto } from './dto/tarea.dto';
import { Tarea } from 'src/schemas/tarea.schema';
import { Model } from 'mongoose';
export declare class TareasService {
    private tareaModel;
    constructor(tareaModel: Model<Tarea>);
    createTareas(datosTarea: CreateTareaDto): Promise<import("mongoose").Document<unknown, {}, Tarea> & Tarea & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTareas(): Promise<Tarea[]>;
    getTareaPorId(id: string): Promise<Tarea>;
    updateTareas(id: string, camposActualizados: Tarea): Promise<Tarea>;
    deleteTareas(id: string): Promise<Tarea>;
}
