import { Injectable } from '@nestjs/common';
import { EstudianteRepository } from '../../../domain/estudiantes/estudiante.repository';
import { IUpdateEstudianteUseCase } from '../ports/in/estudiante.use-cases';
import { UpdateEstudianteCommand } from '../dto/command/update-estudiante.command';
import { EstudianteMapper } from '../mapper/estudiante.mapper';
import { EstudianteResponse } from '../dto/response/estudiante.response';
import { EstudianteId } from '../../../domain/estudiantes/value-objects/estudiante-id.vo';
import { Nombre } from '../../../domain/estudiantes/value-objects/nombre.vo';
import { Apellido } from '../../../domain/estudiantes/value-objects/apellido.vo';
import { FechaNacimiento } from '../../../domain/estudiantes/value-objects/fecha-nacimiento.vo';
import { Semestre } from '../../../domain/estudiantes/value-objects/semestre.vo';
import { Email } from '../../../domain/estudiantes/value-objects/email.vo';
import { Genero } from '../../../domain/estudiantes/value-objects/genero.vo';
import { Telefono } from '../../../domain/estudiantes/value-objects/telefono.vo';
import { Programa } from '../../../domain/estudiantes/value-objects/programa.vo';
import { Universidad } from '../../../domain/estudiantes/value-objects/universidad.vo';
import { EmailEstudianteDuplicadoException, EstudianteNotFoundException } from '../../../domain/estudiantes/exceptions';

@Injectable()
export class UpdateEstudianteService implements IUpdateEstudianteUseCase {
  constructor(private readonly estudianteRepository: EstudianteRepository) {}

  async execute(command: UpdateEstudianteCommand): Promise<EstudianteResponse> {
    const id = EstudianteId.from(command.id);
    const estudiante = await this.estudianteRepository.findById(id);
    if (!estudiante) {
      throw new EstudianteNotFoundException();
    }

    let nuevoEmail: Email | undefined;
    if (command.email !== undefined) {
      nuevoEmail = new Email(command.email);
      const existente = await this.estudianteRepository.findByEmail(nuevoEmail);
      if (existente && existente.id.value !== estudiante.id.value) {
        throw new EmailEstudianteDuplicadoException(command.email);
      }
    }

    estudiante.actualizar({
      nombre: command.nombre ? new Nombre(command.nombre) : undefined,
      apellido: command.apellido ? new Apellido(command.apellido) : undefined,
      fechaNacimiento: command.fechaNacimiento ? new FechaNacimiento(command.fechaNacimiento) : undefined,
      semestre: command.semestre !== undefined ? new Semestre(command.semestre) : undefined,
      email: nuevoEmail,
      genero: command.genero ? new Genero(command.genero) : undefined,
      telefono: command.telefono ? new Telefono(command.telefono) : undefined,
      programa: command.programa ? new Programa(command.programa) : undefined,
      universidad: command.universidad ? new Universidad(command.universidad) : undefined,
    });

    await this.estudianteRepository.save(estudiante);
    return EstudianteMapper.toResponse(estudiante);
  }
}
