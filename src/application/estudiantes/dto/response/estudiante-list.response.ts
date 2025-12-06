import { EstudianteResponse } from './estudiante.response';

export interface EstudianteListResponse {
  estudiantes: EstudianteResponse[];
  totalCount: number;
  page: number;
  pageSize: number;
}
