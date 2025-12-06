"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const aggregate_root_1 = require("../shared/aggregate-root");
const estudiante_id_vo_1 = require("./value-objects/estudiante-id.vo");
class Estudiante extends aggregate_root_1.AggregateRoot {
    id;
    _nombre;
    _apellido;
    _fechaNacimiento;
    _semestre;
    _email;
    _genero;
    _telefono;
    _programa;
    _universidad;
    _createdAt;
    _updatedAt;
    constructor(id, _nombre, _apellido, _fechaNacimiento, _semestre, _email, _genero, _telefono, _programa, _universidad, _createdAt, _updatedAt) {
        super();
        this.id = id;
        this._nombre = _nombre;
        this._apellido = _apellido;
        this._fechaNacimiento = _fechaNacimiento;
        this._semestre = _semestre;
        this._email = _email;
        this._genero = _genero;
        this._telefono = _telefono;
        this._programa = _programa;
        this._universidad = _universidad;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
        this.ensureConsistencia();
    }
    static create(nombre, apellido, fechaNacimiento, semestre, email, genero, telefono, programa, universidad) {
        return new Estudiante(estudiante_id_vo_1.EstudianteId.new(), nombre, apellido, fechaNacimiento, semestre, email, genero, telefono, programa, universidad, new Date(), null);
    }
    static restore(id, nombre, apellido, fechaNacimiento, semestre, email, genero, telefono, programa, universidad, createdAt, updatedAt) {
        return new Estudiante(id, nombre, apellido, fechaNacimiento, semestre, email, genero, telefono, programa, universidad, createdAt, updatedAt);
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get fechaNacimiento() {
        return this._fechaNacimiento;
    }
    get semestre() {
        return this._semestre;
    }
    get email() {
        return this._email;
    }
    get genero() {
        return this._genero;
    }
    get telefono() {
        return this._telefono;
    }
    get programa() {
        return this._programa;
    }
    get universidad() {
        return this._universidad;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    actualizar(props) {
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
    ensureConsistencia() {
        if (!this._nombre || !this._apellido || !this._fechaNacimiento || !this._semestre || !this._email) {
            throw new Error('Datos básicos del estudiante incompletos');
        }
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=estudiante.entity.js.map