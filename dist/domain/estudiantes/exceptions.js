"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEstudianteDuplicadoException = exports.EstudianteNotFoundException = void 0;
class EstudianteNotFoundException extends Error {
    constructor() {
        super('Estudiante no encontrado');
    }
}
exports.EstudianteNotFoundException = EstudianteNotFoundException;
class EmailEstudianteDuplicadoException extends Error {
    constructor(email) {
        super(`Ya existe un estudiante con el email ${email}`);
    }
}
exports.EmailEstudianteDuplicadoException = EmailEstudianteDuplicadoException;
//# sourceMappingURL=exceptions.js.map