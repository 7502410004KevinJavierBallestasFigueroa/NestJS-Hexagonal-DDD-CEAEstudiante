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
exports.EstudianteOrmEntity = void 0;
const typeorm_1 = require("typeorm");
let EstudianteOrmEntity = class EstudianteOrmEntity {
    id;
    nombre;
    apellido;
    fechaNacimiento;
    semestre;
    email;
    genero;
    telefono;
    programa;
    universidad;
    createdAt;
    updatedAt;
};
exports.EstudianteOrmEntity = EstudianteOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_nacimiento', type: 'date' }),
    __metadata("design:type", Date)
], EstudianteOrmEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], EstudianteOrmEntity.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, unique: true }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "programa", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], EstudianteOrmEntity.prototype, "universidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], EstudianteOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp with time zone', nullable: true }),
    __metadata("design:type", Object)
], EstudianteOrmEntity.prototype, "updatedAt", void 0);
exports.EstudianteOrmEntity = EstudianteOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'estudiantes' })
], EstudianteOrmEntity);
//# sourceMappingURL=estudiante.orm-entity.js.map