"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const value_object_1 = require("../../shared/value-object");
class Email extends value_object_1.ValueObject {
    props;
    constructor(value) {
        super();
        const normalized = value?.trim().toLowerCase();
        if (!normalized) {
            throw new Error('El email es obligatorio');
        }
        if (!normalized.includes('@') || (!normalized.endsWith('.com') && !normalized.endsWith('.co'))) {
            throw new Error('El email debe contener @ y terminar en .com o .co');
        }
        if (/\s/.test(normalized)) {
            throw new Error('El email no debe contener espacios');
        }
        this.props = { value: normalized };
    }
    get value() {
        return this.props.value;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.vo.js.map