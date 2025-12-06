import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { CreateEstudianteCommand } from '../dto/command/create-estudiante.command';
import { EstudianteResponse } from '../dto/response/estudiante.response';
import { ICreateEstudianteUseCase } from '../ports/in/estudiante.use-cases';
export declare class CreateEstudianteService implements ICreateEstudianteUseCase {
    private readonly estudianteRepository;
    constructor(estudianteRepository: EstudianteRepository);
    execute(command: CreateEstudianteCommand): Promise<EstudianteResponse>;
}
