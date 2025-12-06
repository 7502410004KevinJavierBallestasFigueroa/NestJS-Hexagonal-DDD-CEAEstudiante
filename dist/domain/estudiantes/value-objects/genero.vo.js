"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
const value_object_1 = require("../../shared/value-object");
const PERMITIDOS = ['M', 'F', 'OTRO'];
class Genero extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const upper = value?.trim().toUpperCase();
        if (!upper) {
            throw new Error('El género es obligatorio');
        }
        if (!PERMITIDOS.includes(upper)) {
            throw new Error('El género debe ser M, F u OTRO');
        }
        this.props = { value: upper };
    }
    get value() {
        return this.props.value;
    }
}
exports.Genero = Genero;
//# sourceMappingURL=genero.vo.js.map