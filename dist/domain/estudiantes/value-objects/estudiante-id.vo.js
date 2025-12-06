"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteId = void 0;
const crypto_1 = require("crypto");
const value_object_1 = require("../../shared/value-object");
class EstudianteId extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (!value) {
            throw new Error('El id del estudiante es obligatorio');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
    static new() {
        return new EstudianteId((0, crypto_1.randomUUID)());
    }
    static from(value) {
        return new EstudianteId(value);
    }
}
exports.EstudianteId = EstudianteId;
//# sourceMappingURL=estudiante-id.vo.js.map