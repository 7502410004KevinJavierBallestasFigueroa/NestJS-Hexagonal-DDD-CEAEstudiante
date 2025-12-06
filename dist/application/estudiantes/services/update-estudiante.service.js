"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstudianteService = void 0;
const common_1 = require("@nestjs/common");
const estudiante_repository_1 = require("../../../domain/estudiantes/estudiante.repository");
const estudiante_mapper_1 = require("../mapper/estudiante.mapper");
const estudiante_id_vo_1 = require("../../../domain/estudiantes/value-objects/estudiante-id.vo");
const nombre_vo_1 = require("../../../domain/estudiantes/value-objects/nombre.vo");
const apellido_vo_1 = require("../../../domain/estudiantes/value-objects/apellido.vo");
const fecha_nacimiento_vo_1 = require("../../../domain/estudiantes/value-objects/fecha-nacimiento.vo");
const semestre_vo_1 = require("../../../domain/estudiantes/value-objects/semestre.vo");
const email_vo_1 = require("../../../domain/estudiantes/value-objects/email.vo");
const genero_vo_1 = require("../../../domain/estudiantes/value-objects/genero.vo");
const telefono_vo_1 = require("../../../domain/estudiantes/value-objects/telefono.vo");
const programa_vo_1 = require("../../../domain/estudiantes/value-objects/programa.vo");
const universidad_vo_1 = require("../../../domain/estudiantes/value-objects/universidad.vo");
const exceptions_1 = require("../../../domain/estudiantes/exceptions");
let UpdateEstudianteService = class UpdateEstudianteService {
    estudianteRepository;
    constructor(estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }
    async execute(command) {
        const id = estudiante_id_vo_1.EstudianteId.from(command.id);
        const estudiante = await this.estudianteRepository.findById(id);
        if (!estudiante) {
            throw new exceptions_1.EstudianteNotFoundException();
        }
        let nuevoEmail;
        if (command.email !== undefined) {
            nuevoEmail = new email_vo_1.Email(command.email);
            const existente = await this.estudianteRepository.findByEmail(nuevoEmail);
            if (existente && existente.id.value !== estudiante.id.value) {
                throw new exceptions_1.EmailEstudianteDuplicadoException(command.email);
            }
        }
        estudiante.actualizar({
            nombre: command.nombre ? new nombre_vo_1.Nombre(command.nombre) : undefined,
            apellido: command.apellido ? new apellido_vo_1.Apellido(command.apellido) : undefined,
            fechaNacimiento: command.fechaNacimiento ? new fecha_nacimiento_vo_1.FechaNacimiento(command.fechaNacimiento) : undefined,
            semestre: command.semestre !== undefined ? new semestre_vo_1.Semestre(command.semestre) : undefined,
            email: nuevoEmail,
            genero: command.genero ? new genero_vo_1.Genero(command.genero) : undefined,
            telefono: command.telefono ? new telefono_vo_1.Telefono(command.telefono) : undefined,
            programa: command.programa ? new programa_vo_1.Programa(command.programa) : undefined,
            universidad: command.universidad ? new universidad_vo_1.Universidad(command.universidad) : undefined,
        });
        await this.estudianteRepository.save(estudiante);
        return estudiante_mapper_1.EstudianteMapper.toResponse(estudiante);
    }
};
exports.UpdateEstudianteService = UpdateEstudianteService;
exports.UpdateEstudianteService = UpdateEstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [estudiante_repository_1.EstudianteRepository])
], UpdateEstudianteService);
//# sourceMappingURL=update-estudiante.service.js.map