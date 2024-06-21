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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const usuario_schema_1 = require("./schemas/usuario.schema");
const mongoose_2 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usuarioModel, jwtService) {
        this.usuarioModel = usuarioModel;
        this.jwtService = jwtService;
    }
    async registro(datosRegistro) {
        const { nombre, email, contrasena } = datosRegistro;
        const hashContrasena = await (0, bcryptjs_1.hash)(contrasena, 10);
        const usuario = await this.usuarioModel.create({
            nombre,
            email,
            contrasena: hashContrasena,
        });
        const token = this.jwtService.sign({ id: usuario._id });
        return { token };
    }
    async login(datosLogin) {
        const { email, contrasena } = datosLogin;
        const usuario = await this.usuarioModel.findOne({ email });
        const laContrasenaCoincide = await (0, bcryptjs_1.compare)(contrasena, usuario.contrasena);
        if (!usuario || !laContrasenaCoincide) {
            throw new common_1.UnauthorizedException('Email o contraseña invalida');
        }
        const token = this.jwtService.sign({ id: usuario._id });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuario_schema_1.Usuario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map