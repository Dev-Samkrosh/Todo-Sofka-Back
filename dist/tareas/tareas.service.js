"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tarea_schema_1 = require("../schemas/tarea.schema");
const mongoose_2 = require("mongoose");
let TareasService = class TareasService {
    constructor(tareaModel) {
        this.tareaModel = tareaModel;
    }
    async createTareas(datosTarea) {
        const nuevaTarea = new this.tareaModel(datosTarea);
        return nuevaTarea.save();
    }
    async getTareas() {
        return await this.tareaModel.find();
    }
    async getTareaPorId(id) {
        return await this.tareaModel.findById(id);
    }
    async updateTareas(id, camposActualizados) {
        return await this.tareaModel.findOneAndUpdate({ id: id }, camposActualizados);
    }
    async deleteTareas(id) {
        return await this.tareaModel.findOneAndDelete({ id: id });
    }
};
exports.TareasService = TareasService;
exports.TareasService = TareasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tarea_schema_1.Tarea.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TareasService);
//# sourceMappingURL=tareas.service.js.map