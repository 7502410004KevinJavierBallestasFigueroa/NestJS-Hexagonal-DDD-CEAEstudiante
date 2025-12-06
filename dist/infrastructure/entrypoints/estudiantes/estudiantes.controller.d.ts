import { ICreateEstudianteUseCase, IDeleteEstudianteUseCase, IGetEstudianteByIdUseCase, IListEstudiantesUseCase, IUpdateEstudianteUseCase } from '../../../application/estudiantes/ports/in/estudiante.use-cases';
import { CreateEstudianteRequest } from './dto/create-estudiante.request';
import { UpdateEstudianteRequest } from './dto/update-estudiante.request';
export declare class EstudiantesController {
    private readonly createUseCase;
    private readonly updateUseCase;
    private readonly deleteUseCase;
    private readonly getByIdUseCase;
    private readonly listUseCase;
    constructor(createUseCase: ICreateEstudianteUseCase, updateUseCase: IUpdateEstudianteUseCase, deleteUseCase: IDeleteEstudianteUseCase, getByIdUseCase: IGetEstudianteByIdUseCase, listUseCase: IListEstudiantesUseCase);
    create(request: CreateEstudianteRequest): Promise<import("../../../application/estudiantes/dto/response/estudiante.response").EstudianteResponse>;
    getById(id: string): Promise<import("../../../application/estudiantes/dto/response/estudiante.response").EstudianteResponse | null>;
    list(page?: number, pageSize?: number, searchTerm?: string, email?: string, genero?: string, programa?: string, universidad?: string, semestre?: string): Promise<import("../../../application/estudiantes/dto/response/estudiante-list.response").EstudianteListResponse>;
    update(id: string, request: UpdateEstudianteRequest): Promise<import("../../../application/estudiantes/dto/response/estudiante.response").EstudianteResponse>;
    delete(id: string): Promise<void>;
}
