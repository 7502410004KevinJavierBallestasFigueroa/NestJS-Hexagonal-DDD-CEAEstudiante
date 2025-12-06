import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IUpdateEstudianteUseCase } from '../ports/in/estudiante.use-cases';
import { UpdateEstudianteCommand } from '../dto/command/update-estudiante.command';
import { EstudianteResponse } from '../dto/response/estudiante.response';
export declare class UpdateEstudianteService implements IUpdateEstudianteUseCase {
    private readonly estudianteRepository;
    constructor(estudianteRepository: EstudianteRepository);
    execute(command: UpdateEstudianteCommand): Promise<EstudianteResponse>;
}
