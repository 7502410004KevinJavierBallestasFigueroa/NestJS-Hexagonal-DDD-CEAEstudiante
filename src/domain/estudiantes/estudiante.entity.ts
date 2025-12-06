import { AggregateRoot } from '../shared/aggregate-root';
import { Apellido } from './value-objects/apellido.vo';
import { Email } from './value-objects/email.vo';
import { EstudianteId } from './value-objects/estudiante-id.vo';
import { FechaNacimiento } from './value-objects/fecha-nacimiento.vo';
import { Genero } from './value-objects/genero.vo';
import { Nombre } from './value-objects/nombre.vo';
import { Programa } from './value-objects/programa.vo';
import { Semestre } from './value-objects/semestre.vo';
import { Telefono } from './value-objects/telefono.vo';
import { Universidad } from './value-objects/universidad.vo';

interface ActualizarProps {
  nombre?: Nombre;
  apellido?: Apellido;
  fechaNacimiento?: FechaNacimiento;
  semestre?: Semestre;
  email?: Email;
  genero?: Genero;
  telefono?: Telefono;
  programa?: Programa;
  universidad?: Universidad;
}

export class Estudiante extends AggregateRoot {
  private constructor(
    public readonly id: EstudianteId,
    private _nombre: Nombre,
    private _apellido: Apellido,
    private _fechaNacimiento: FechaNacimiento,
    private _semestre: Semestre,
    private _email: Email,
    private _genero: Genero,
    private _telefono: Telefono,
    private _programa: Programa,
    private _universidad: Universidad,
    private _createdAt: Date,
    private _updatedAt?: Date | null,
  ) {
    super();
    this.ensureConsistencia();
  }

  static create(
    nombre: Nombre,
    apellido: Apellido,
    fechaNacimiento: FechaNacimiento,
    semestre: Semestre,
    email: Email,
    genero: Genero,
    telefono: Telefono,
    programa: Programa,
    universidad: Universidad,
  ): Estudiante {
    return new Estudiante(
      EstudianteId.new(),
      nombre,
      apellido,
      fechaNacimiento,
      semestre,
      email,
      genero,
      telefono,
      programa,
      universidad,
      new Date(),
      null,
    );
  }

  static restore(
    id: EstudianteId,
    nombre: Nombre,
    apellido: Apellido,
    fechaNacimiento: FechaNacimiento,
    semestre: Semestre,
    email: Email,
    genero: Genero,
    telefono: Telefono,
    programa: Programa,
    universidad: Universidad,
    createdAt: Date,
    updatedAt?: Date | null,
  ): Estudiante {
    return new Estudiante(
      id,
      nombre,
      apellido,
      fechaNacimiento,
      semestre,
      email,
      genero,
      telefono,
      programa,
      universidad,
      createdAt,
      updatedAt,
    );
  }

  get nombre(): Nombre {
    return this._nombre;
  }
  get apellido(): Apellido {
    return this._apellido;
  }
  get fechaNacimiento(): FechaNacimiento {
    return this._fechaNacimiento;
  }
  get semestre(): Semestre {
    return this._semestre;
  }
  get email(): Email {
    return this._email;
  }
  get genero(): Genero {
    return this._genero;
  }
  get telefono(): Telefono {
    return this._telefono;
  }
  get programa(): Programa {
    return this._programa;
  }
  get universidad(): Universidad {
    return this._universidad;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date | null | undefined {
    return this._updatedAt;
  }

  actualizar(props: ActualizarProps): void {
    this._nombre = props.nombre ?? this._nombre;
    this._apellido = props.apellido ?? this._apellido;
    this._fechaNacimiento = props.fechaNacimiento ?? this._fechaNacimiento;
    this._semestre = props.semestre ?? this._semestre;
    this._email = props.email ?? this._email;
    this._genero = props.genero ?? this._genero;
    this._telefono = props.telefono ?? this._telefono;
    this._programa = props.programa ?? this._programa;
    this._universidad = props.universidad ?? this._universidad;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  private ensureConsistencia(): void {
    if (!this._nombre || !this._apellido || !this._fechaNacimiento || !this._semestre || !this._email) {
      throw new Error('Datos básicos del estudiante incompletos');
    }
  }
}
