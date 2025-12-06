"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semestre = void 0;
const value_object_1 = require("../../shared/value-object");
class Semestre extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        if (!Number.isInteger(value)) {
            throw new Error('El semestre debe ser un entero');
        }
        if (value < 1 || value > 10) {
            throw new Error('El semestre debe estar entre 1 y 10');
        }
        this.props = { value };
    }
    get value() {
        return this.props.value;
    }
}
exports.Semestre = Semestre;
//# sourceMappingURL=semestre.vo.js.map