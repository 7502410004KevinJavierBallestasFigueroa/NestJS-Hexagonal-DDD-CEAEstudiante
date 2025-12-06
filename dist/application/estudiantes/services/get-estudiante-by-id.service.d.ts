import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IGetEstudianteByIdUseCase } from '../ports/in/estudiante.use-cases';
import { GetEstudianteByIdQuery } from '../dto/query/get-estudiante-by-id.query';
import { EstudianteResponse } from '../dto/response/estudiante.response';
export declare class GetEstudianteByIdService implements IGetEstudianteByIdUseCase {
    private readonly estudianteRepository;
    constructor(estudianteRepository: EstudianteRepository);
    execute(query: GetEstudianteByIdQuery): Promise<EstudianteResponse | null>;
}
