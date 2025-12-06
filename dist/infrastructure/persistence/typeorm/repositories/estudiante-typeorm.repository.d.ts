import { Repository } from 'typeorm';
import { EstudianteRepository } from '../../../../domain/estudiantes/estudiante.repository';
import { Estudiante } from '../../../../domain/estudiantes/estudiante.entity';
import { EstudianteId } from '../../../../domain/estudiantes/value-objects/estudiante-id.vo';
import { Email } from '../../../../domain/estudiantes/value-objects/email.vo';
import { EstudianteOrmEntity } from '../entities/estudiante.orm-entity';
export declare class EstudianteTypeOrmRepository implements EstudianteRepository {
    private readonly repo;
    constructor(repo: Repository<EstudianteOrmEntity>);
    findById(id: EstudianteId): Promise<Estudiante | null>;
    findByEmail(email: Email): Promise<Estudiante | null>;
    findAll(): Promise<Estudiante[]>;
    save(estudiante: Estudiante): Promise<void>;
    delete(id: EstudianteId): Promise<void>;
    private toDomain;
    private toOrm;
}
