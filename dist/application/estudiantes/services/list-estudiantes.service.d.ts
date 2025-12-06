import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IListEstudiantesUseCase } from '../ports/in/estudiante.use-cases';
import { ListEstudiantesQuery } from '../dto/query/list-estudiantes.query';
import { EstudianteListResponse } from '../dto/response/estudiante-list.response';
export declare class ListEstudiantesService implements IListEstudiantesUseCase {
    private readonly estudianteRepository;
    constructor(estudianteRepository: EstudianteRepository);
    execute(query: ListEstudiantesQuery): Promise<EstudianteListResponse>;
}
