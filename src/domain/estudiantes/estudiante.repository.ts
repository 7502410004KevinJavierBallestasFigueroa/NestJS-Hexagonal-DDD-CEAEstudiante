import { Estudiante } from './estudiante.entity';
import { EstudianteId } from './value-objects/estudiante-id.vo';
import { Email } from './value-objects/email.vo';

export abstract class EstudianteRepository {
  abstract findById(id: EstudianteId): Promise<Estudiante | null>;
  abstract findByEmail(email: Email): Promise<Estudiante | null>;
  abstract findAll(): Promise<Estudiante[]>;
  abstract save(estudiante: Estudiante): Promise<void>;
  abstract delete(id: EstudianteId): Promise<void>;
}
