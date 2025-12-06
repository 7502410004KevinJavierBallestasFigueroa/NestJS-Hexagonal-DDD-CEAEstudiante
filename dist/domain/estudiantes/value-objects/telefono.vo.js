"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
const value_object_1 = require("../../shared/value-object");
class Telefono extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El teléfono es obligatorio');
        }
        if (!/^[0-9]+$/.test(trimmed)) {
            throw new Error('El teléfono solo debe contener dígitos');
        }
        if (trimmed.length !== 10) {
            throw new Error('El teléfono debe tener 10 dígitos');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.vo.js.map