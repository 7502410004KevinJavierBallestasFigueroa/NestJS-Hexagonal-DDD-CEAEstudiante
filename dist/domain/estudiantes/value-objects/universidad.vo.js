"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Universidad = void 0;
const value_object_1 = require("../../shared/value-object");
const UNIVERSIDADES_PERMITIDAS = [
    'universidad nacional',
    'universidad de los andes',
    'universidad javeriana',
    'universidad del valle',
    'universidad eafit',
    'universidad distrital',
];
class Universidad extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const trimmed = value?.trim();
        if (!trimmed) {
            throw new Error('La universidad es obligatoria');
        }
        const normalized = trimmed.toLowerCase();
        if (!UNIVERSIDADES_PERMITIDAS.includes(normalized)) {
            throw new Error('La universidad no está en la lista permitida');
        }
        this.props = { value: trimmed };
    }
    get value() {
        return this.props.value;
    }
}
exports.Universidad = Universidad;
//# sourceMappingURL=universidad.vo.js.map