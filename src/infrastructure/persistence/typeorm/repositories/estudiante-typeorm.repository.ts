import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteRepository } from '../../../../domain/estudiantes/estudiante.repository';
import { Estudiante } from '../../../../domain/estudiantes/estudiante.entity';
import { EstudianteId } from '../../../../domain/estudiantes/value-objects/estudiante-id.vo';
import { Nombre } from '../../../../domain/estudiantes/value-objects/nombre.vo';
import { Apellido } from '../../../../domain/estudiantes/value-objects/apellido.vo';
import { FechaNacimiento } from '../../../../domain/estudiantes/value-objects/fecha-nacimiento.vo';
import { Semestre } from '../../../../domain/estudiantes/value-objects/semestre.vo';
import { Email } from '../../../../domain/estudiantes/value-objects/email.vo';
import { Genero } from '../../../../domain/estudiantes/value-objects/genero.vo';
import { Telefono } from '../../../../domain/estudiantes/value-objects/telefono.vo';
import { Programa } from '../../../../domain/estudiantes/value-objects/programa.vo';
import { Universidad } from '../../../../domain/estudiantes/value-objects/universidad.vo';
import { EstudianteOrmEntity } from '../entities/estudiante.orm-entity';

@Injectable()
export class EstudianteTypeOrmRepository implements EstudianteRepository {
  constructor(@InjectRepository(EstudianteOrmEntity) private readonly repo: Repository<EstudianteOrmEntity>) {}

  async findById(id: EstudianteId): Promise<Estudiante | null> {
    const model = await this.repo.findOne({ where: { id: id.value } });
    return model ? this.toDomain(model) : null;
  }

  async findByEmail(email: Email): Promise<Estudiante | null> {
    const model = await this.repo.findOne({ where: { email: email.value } });
    return model ? this.toDomain(model) : null;
  }

  async findAll(): Promise<Estudiante[]> {
    const models = await this.repo.find();
    return models.map((m) => this.toDomain(m));
  }

  async save(estudiante: Estudiante): Promise<void> {
    await this.repo.save(this.toOrm(estudiante));
  }

  async delete(id: EstudianteId): Promise<void> {
    await this.repo.delete({ id: id.value });
  }

  private toDomain(model: EstudianteOrmEntity): Estudiante {
    return Estudiante.restore(
      EstudianteId.from(model.id),
      new Nombre(model.nombre),
      new Apellido(model.apellido),
      new FechaNacimiento(model.fechaNacimiento),
      new Semestre(model.semestre),
      new Email(model.email),
      new Genero(model.genero),
      new Telefono(model.telefono),
      new Programa(model.programa),
      new Universidad(model.universidad),
      model.createdAt,
      model.updatedAt,
    );
  }

  private toOrm(estudiante: Estudiante): EstudianteOrmEntity {
    return {
      id: estudiante.id.value,
      nombre: estudiante.nombre.value,
      apellido: estudiante.apellido.value,
      fechaNacimiento: estudiante.fechaNacimiento.value,
      semestre: estudiante.semestre.value,
      email: estudiante.email.value,
      genero: estudiante.genero.value,
      telefono: estudiante.telefono.value,
      programa: estudiante.programa.value,
      universidad: estudiante.universidad.value,
      createdAt: estudiante.createdAt,
      updatedAt: estudiante.updatedAt ?? null,
    };
  }
}
