"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaEntity = void 0;
const openapi = require("@nestjs/swagger");
class TareaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, titulo: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, estado: { required: true, type: () => Boolean } };
    }
}
exports.TareaEntity = TareaEntity;
//# sourceMappingURL=tareas.entity.js.map