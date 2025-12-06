import { Estudiante } from '../../../domain/estudiantes/estudiante.entity';
import { EstudianteListResponse } from '../dto/response/estudiante-list.response';
import { EstudianteResponse } from '../dto/response/estudiante.response';

export class EstudianteMapper {
  static toResponse(estudiante: Estudiante): EstudianteResponse {
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

  static toList(estudiantes: Estudiante[], total: number, page: number, pageSize: number): EstudianteListResponse {
    return {
      estudiantes: estudiantes.map((e) => this.toResponse(e)),
      totalCount: total,
      page,
      pageSize,
    };
  }
}
