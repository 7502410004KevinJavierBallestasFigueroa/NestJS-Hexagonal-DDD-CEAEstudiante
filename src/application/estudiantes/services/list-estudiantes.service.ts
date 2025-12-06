import { Injectable } from '@nestjs/common';
import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IListEstudiantesUseCase } from '../ports/in/estudiante.use-cases';
import { ListEstudiantesQuery } from '../dto/query/list-estudiantes.query';
import { EstudianteListResponse } from '../dto/response/estudiante-list.response';
import { EstudianteMapper } from '../mapper/estudiante.mapper';

@Injectable()
export class ListEstudiantesService implements IListEstudiantesUseCase {
  constructor(private readonly estudianteRepository: EstudianteRepository) {}

  async execute(query: ListEstudiantesQuery): Promise<EstudianteListResponse> {
    let estudiantes = await this.estudianteRepository.findAll();

    if (query.genero) {
      estudiantes = estudiantes.filter((e) => e.genero.value.toLowerCase() === query.genero!.toLowerCase());
    }
    if (query.programa) {
      estudiantes = estudiantes.filter((e) => e.programa.value.toLowerCase() === query.programa!.toLowerCase());
    }
    if (query.universidad) {
      estudiantes = estudiantes.filter(
        (e) => e.universidad.value.toLowerCase() === query.universidad!.toLowerCase(),
      );
    }
    if (query.semestre !== undefined) {
      estudiantes = estudiantes.filter((e) => e.semestre.value === query.semestre);
    }
    if (query.email) {
      estudiantes = estudiantes.filter((e) => e.email.value === query.email!.toLowerCase());
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      estudiantes = estudiantes.filter(
        (e) =>
          e.nombre.value.toLowerCase().includes(term) ||
          e.apellido.value.toLowerCase().includes(term) ||
          e.programa.value.toLowerCase().includes(term),
      );
    }

    const total = estudiantes.length;
    const start = (query.page - 1) * query.pageSize;
    const paged = estudiantes.slice(start, start + query.pageSize);

    return EstudianteMapper.toList(paged, total, query.page, query.pageSize);
  }
}
