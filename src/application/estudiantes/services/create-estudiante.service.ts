import { Injectable } from '@nestjs/common';
import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { Estudiante } from '../../../domain/estudiantes/estudiante.entity';
import { Nombre } from '../../../domain/estudiantes/value-objects/nombre.vo';
import { Apellido } from '../../../domain/estudiantes/value-objects/apellido.vo';
import { FechaNacimiento } from '../../../domain/estudiantes/value-objects/fecha-nacimiento.vo';
import { Semestre } from '../../../domain/estudiantes/value-objects/semestre.vo';
import { Email } from '../../../domain/estudiantes/value-objects/email.vo';
import { Genero } from '../../../domain/estudiantes/value-objects/genero.vo';
import { Telefono } from '../../../domain/estudiantes/value-objects/telefono.vo';
import { Programa } from '../../../domain/estudiantes/value-objects/programa.vo';
import { Universidad } from '../../../domain/estudiantes/value-objects/universidad.vo';
import { CreateEstudianteCommand } from '../dto/command/create-estudiante.command';
import { EstudianteResponse } from '../dto/response/estudiante.response';
import { EstudianteMapper } from '../mapper/estudiante.mapper';
import { ICreateEstudianteUseCase } from '../ports/in/estudiante.use-cases';
import { EmailEstudianteDuplicadoException } from '../../../domain/estudiantes/exceptions';

@Injectable()
export class CreateEstudianteService implements ICreateEstudianteUseCase {
  constructor(private readonly estudianteRepository: EstudianteRepository) {}

  async execute(command: CreateEstudianteCommand): Promise<EstudianteResponse> {
    const email = new Email(command.email);
    const existente = await this.estudianteRepository.findByEmail(email);
    if (existente) {
      throw new EmailEstudianteDuplicadoException(command.email);
    }

    const estudiante = Estudiante.create(
      new Nombre(command.nombre),
      new Apellido(command.apellido),
      new FechaNacimiento(command.fechaNacimiento),
      new Semestre(command.semestre),
      email,
      new Genero(command.genero),
      new Telefono(command.telefono),
      new Programa(command.programa),
      new Universidad(command.universidad),
    );

    await this.estudianteRepository.save(estudiante);
    return EstudianteMapper.toResponse(estudiante);
  }
}
