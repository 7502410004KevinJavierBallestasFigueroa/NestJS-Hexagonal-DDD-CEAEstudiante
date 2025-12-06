"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nombre = void 0;
const value_object_1 = require("../../shared/value-object");
const isLettersAndSpaces = (value) => /^[A-Za-zÀ-ÿ\s]+$/.test(value);
class Nombre extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El nombre es obligatorio');
        }
        if (trimmed.length < 3 || trimmed.length > 20) {
            throw new Error('El nombre debe tener entre 3 y 20 caracteres');
        }
        if (!isLettersAndSpaces(trimmed)) {
            throw new Error('El nombre solo puede contener letras y espacios');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Nombre = Nombre;
//# sourceMappingURL=nombre.vo.js.map