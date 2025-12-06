import { Injectable } from '@nestjs/common';
import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IDeleteEstudianteUseCase } from '../ports/in/estudiante.use-cases';
import { DeleteEstudianteCommand } from '../dto/command/delete-estudiante.command';
import { EstudianteId } from '../../../domain/estudiantes/value-objects/estudiante-id.vo';

@Injectable()
export class DeleteEstudianteService implements IDeleteEstudianteUseCase {
  constructor(private readonly estudianteRepository: EstudianteRepository) {}

  async execute(command: DeleteEstudianteCommand): Promise<void> {
    await this.estudianteRepository.delete(EstudianteId.from(command.id));
  }
}
