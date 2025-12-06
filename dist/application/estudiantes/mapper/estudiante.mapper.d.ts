import { Estudiante } from '../../../domain/estudiantes/estudiante.entity';
import { EstudianteListResponse } from '../dto/response/estudiante-list.response';
import { EstudianteResponse } from '../dto/response/estudiante.response';
export declare class EstudianteMapper {
    static toResponse(estudiante: Estudiante): EstudianteResponse;
    static toList(estudiantes: Estudiante[], total: number, page: number, pageSize: number): EstudianteListResponse;
}
