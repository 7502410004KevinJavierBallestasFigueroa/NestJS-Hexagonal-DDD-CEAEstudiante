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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteTypeOrmRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudiante_entity_1 = require("../../../../domain/estudiantes/estudiante.entity");
const estudiante_id_vo_1 = require("../../../../domain/estudiantes/value-objects/estudiante-id.vo");
const nombre_vo_1 = require("../../../../domain/estudiantes/value-objects/nombre.vo");
const apellido_vo_1 = require("../../../../domain/estudiantes/value-objects/apellido.vo");
const fecha_nacimiento_vo_1 = require("../../../../domain/estudiantes/value-objects/fecha-nacimiento.vo");
const semestre_vo_1 = require("../../../../domain/estudiantes/value-objects/semestre.vo");
const email_vo_1 = require("../../../../domain/estudiantes/value-objects/email.vo");
const genero_vo_1 = require("../../../../domain/estudiantes/value-objects/genero.vo");
const telefono_vo_1 = require("../../../../domain/estudiantes/value-objects/telefono.vo");
const programa_vo_1 = require("../../../../domain/estudiantes/value-objects/programa.vo");
const universidad_vo_1 = require("../../../../domain/estudiantes/value-objects/universidad.vo");
const estudiante_orm_entity_1 = require("../entities/estudiante.orm-entity");
let EstudianteTypeOrmRepository = class EstudianteTypeOrmRepository {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findById(id) {
        const model = await this.repo.findOne({ where: { id: id.value } });
        return model ? this.toDomain(model) : null;
    }
    async findByEmail(email) {
        const model = await this.repo.findOne({ where: { email: email.value } });
        return model ? this.toDomain(model) : null;
    }
    async findAll() {
        const models = await this.repo.find();
        return models.map((m) => this.toDomain(m));
    }
    async save(estudiante) {
        await this.repo.save(this.toOrm(estudiante));
    }
    async delete(id) {
        await this.repo.delete({ id: id.value });
    }
    toDomain(model) {
        return estudiante_entity_1.Estudiante.restore(estudiante_id_vo_1.EstudianteId.from(model.id), new nombre_vo_1.Nombre(model.nombre), new apellido_vo_1.Apellido(model.apellido), new fecha_nacimiento_vo_1.FechaNacimiento(model.fechaNacimiento), new semestre_vo_1.Semestre(model.semestre), new email_vo_1.Email(model.email), new genero_vo_1.Genero(model.genero), new telefono_vo_1.Telefono(model.telefono), new programa_vo_1.Programa(model.programa), new universidad_vo_1.Universidad(model.universidad), model.createdAt, model.updatedAt);
    }
    toOrm(estudiante) {
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
};
exports.EstudianteTypeOrmRepository = EstudianteTypeOrmRepository;
exports.EstudianteTypeOrmRepository = EstudianteTypeOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudiante_orm_entity_1.EstudianteOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstudianteTypeOrmRepository);
//# sourceMappingURL=estudiante-typeorm.repository.js.map