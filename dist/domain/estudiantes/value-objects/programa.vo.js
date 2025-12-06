"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programa = void 0;
const value_object_1 = require("../../shared/value-object");
const PROGRAMAS_PERMITIDOS = [
    'ingenieria de sistemas',
    'ingenieria industrial',
    'derecho',
    'medicina',
    'administracion',
    'contaduria',
];
class Programa extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('El programa es obligatorio');
        }
        const normalized = trimmed.toLowerCase();
        if (!PROGRAMAS_PERMITIDOS.includes(normalized)) {
            throw new Error('El programa no está en la lista permitida');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Programa = Programa;
//# sourceMappingURL=programa.vo.js.map