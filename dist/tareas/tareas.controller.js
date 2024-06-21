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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tareas_service_1 = require("./tareas.service");
const update_tarea_dto_1 = require("./dto/update-tarea.dto");
const swagger_1 = require("@nestjs/swagger");
const create_tarea_dto_1 = require("./dto/create-tarea.dto");
const passport_1 = require("@nestjs/passport");
let TareasController = class TareasController {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    async getTareas() {
        return this.tareasService.getTareas();
    }
    async createTareas(datosTarea, req) {
        return this.tareasService.createTareas(datosTarea, req.user);
    }
    async updateTareas(id, camposActualizados) {
        return this.tareasService.updateTareas(id, camposActualizados);
    }
    async deleteTareas(id) {
        return this.tareasService.deleteTareas(id);
    }
};
exports.TareasController = TareasController;
__decorate([
    (0, common_1.Get)('/get'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/tarea.schema").Tarea] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "getTareas", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    openapi.ApiResponse({ status: 201, type: require("./schemas/tarea.schema").Tarea }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarea_dto_1.CreateTareaDto, Object]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "createTareas", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    openapi.ApiResponse({ status: 200, type: require("./schemas/tarea.schema").Tarea }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tarea_dto_1.UpdateTareaDto]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "updateTareas", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'Deleted Successfully',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    openapi.ApiResponse({ status: 200, type: require("./schemas/tarea.schema").Tarea }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "deleteTareas", null);
exports.TareasController = TareasController = __decorate([
    (0, common_1.Controller)('/tareas'),
    (0, swagger_1.ApiTags)('Tareas'),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareasController);
//# sourceMappingURL=tareas.controller.js.map