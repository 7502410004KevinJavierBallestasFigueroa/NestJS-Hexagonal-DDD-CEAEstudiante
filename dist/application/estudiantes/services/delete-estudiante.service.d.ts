import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IDeleteEstudianteUseCase } from '../ports/in/estudiante.use-cases';
import { DeleteEstudianteCommand } from '../dto/command/delete-estudiante.command';
export declare class DeleteEstudianteService implements IDeleteEstudianteUseCase {
    private readonly estudianteRepository;
    constructor(estudianteRepository: EstudianteRepository);
    execute(command: DeleteEstudianteCommand): Promise<void>;
}
