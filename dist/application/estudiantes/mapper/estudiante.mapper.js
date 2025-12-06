"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteMapper = void 0;
class EstudianteMapper {
    static toResponse(estudiante) {
        return {
            id: estudiante.id.value,
            nombre: estudiante.nombre.value,
            apellido: estudiante.apellido.value,
            fechaNacimiento: estudiante.fechaNacimiento.value,
            semestre: estudiante.semestre.value,
            email: estudiante.email.value,
            genero: estudiante.genero.value,
            telefono: estudiante.telefono.value,
            programa: estudiante.programa.value,
            universidad: estudiante.universidad.value,
            createdAt: estudiante.createdAt,
            updatedAt: estudiante.updatedAt ?? null,
        };
    }
    static toList(estudiantes, total, page, pageSize) {
        return {
            estudiantes: estudiantes.map((e) => this.toResponse(e)),
            totalCount: total,
            page,
            pageSize,
        };
    }
}
exports.EstudianteMapper = EstudianteMapper;
//# sourceMappingURL=estudiante.mapper.js.map