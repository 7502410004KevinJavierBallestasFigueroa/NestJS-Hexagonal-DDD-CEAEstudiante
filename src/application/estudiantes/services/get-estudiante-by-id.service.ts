import { Injectable } from '@nestjs/common';
import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IGetEstudianteByIdUseCase } from '../ports/in/estudiante.use-cases';
import { GetEstudianteByIdQuery } from '../dto/query/get-estudiante-by-id.query';
import { EstudianteMapper } from '../mapper/estudiante.mapper';
import { EstudianteResponse } from '../dto/response/estudiante.response';
import { EstudianteId } from '../../../domain/estudiantes/value-objects/estudiante-id.vo';

@Injectable()
export class GetEstudianteByIdService implements IGetEstudianteByIdUseCase {
  constructor(private readonly estudianteRepository: EstudianteRepository) {}

  async execute(query: GetEstudianteByIdQuery): Promise<EstudianteResponse | null> {
    const estudiante = await this.estudianteRepository.findById(EstudianteId.from(query.id));
    return estudiante ? EstudianteMapper.toResponse(estudiante) : null;
  }
}
