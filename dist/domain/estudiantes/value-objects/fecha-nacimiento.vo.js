"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechaNacimiento = void 0;
const value_object_1 = require("../../shared/value-object");
class FechaNacimiento extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const date = value instanceof Date ? value : new Date(value);
        if (Number.isNaN(date.getTime())) {
            throw new Error('La fecha de nacimiento no es válida');
        }
        const now = new Date();
        if (date >= now) {
            throw new Error('La fecha de nacimiento debe ser en el pasado');
        }
        const age = this.calculateAge(date, now);
        if (age < 15) {
            throw new Error('El estudiante debe tener al menos 15 años');
        }
        this.props = { value: date };
    }
    get value() {
        return this.props.value;
    }
    calculateAge(date, now) {
        let age = now.getFullYear() - date.getFullYear();
        const m = now.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }
}
exports.FechaNacimiento = FechaNacimiento;
//# sourceMappingURL=fecha-nacimiento.vo.js.map