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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaSchema = exports.Tarea = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
const usuario_schema_1 = require("../../auth/schemas/usuario.schema");
let Tarea = class Tarea {
};
exports.Tarea = Tarea;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Tarea.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Tarea.prototype, "titulo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tarea.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: false,
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Tarea.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Usuario',
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", usuario_schema_1.Usuario)
], Tarea.prototype, "usuario", void 0);
exports.Tarea = Tarea = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Tarea);
exports.TareaSchema = mongoose_1.SchemaFactory.createForClass(Tarea);
//# sourceMappingURL=tarea.schema.js.map