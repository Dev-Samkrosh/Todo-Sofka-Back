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
exports.TareasController = void 0;
const common_1 = require("@nestjs/common");
const tareas_service_1 = require("./tareas.service");
const tarea_dto_1 = require("./dto/tarea.dto");
let TareasController = class TareasController {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    getTareas() {
        return this.tareasService.getTareas();
    }
    createTareas(datosTarea) {
        return this.tareasService.createTareas(datosTarea);
    }
    updateTareas(id, camposActualizados) {
        return this.tareasService.updateTareas(id, camposActualizados);
    }
    deleteTareas(id) {
        return this.tareasService.deleteTareas(id);
    }
};
exports.TareasController = TareasController;
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "getTareas", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarea_dto_1.CreateTareaDto]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "createTareas", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tarea_dto_1.UpdateTareaDto]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "updateTareas", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "deleteTareas", null);
exports.TareasController = TareasController = __decorate([
    (0, common_1.Controller)('/tareas'),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareasController);
//# sourceMappingURL=tareas.controller.js.map