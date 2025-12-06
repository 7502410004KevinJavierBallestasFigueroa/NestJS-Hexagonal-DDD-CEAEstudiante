"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../application/estudiantes/services");
const estudiante_use_cases_1 = require("../application/estudiantes/ports/in/estudiante.use-cases");
const estudiante_repository_1 = require("../domain/estudiantes/estudiante.repository");
const estudiantes_controller_1 = require("../infrastructure/entrypoints/estudiantes/estudiantes.controller");
const estudiante_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/estudiante.orm-entity");
const estudiante_typeorm_repository_1 = require("../infrastructure/persistence/typeorm/repositories/estudiante-typeorm.repository");
let EstudiantesModule = class EstudiantesModule {
};
exports.EstudiantesModule = EstudiantesModule;
exports.EstudiantesModule = EstudiantesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estudiante_orm_entity_1.EstudianteOrmEntity])],
        controllers: [estudiantes_controller_1.EstudiantesController],
        providers: [
            { provide: estudiante_repository_1.EstudianteRepository, useClass: estudiante_typeorm_repository_1.EstudianteTypeOrmRepository },
            { provide: estudiante_use_cases_1.ICreateEstudianteUseCase, useClass: services_1.CreateEstudianteService },
            { provide: estudiante_use_cases_1.IUpdateEstudianteUseCase, useClass: services_1.UpdateEstudianteService },
            { provide: estudiante_use_cases_1.IDeleteEstudianteUseCase, useClass: services_1.DeleteEstudianteService },
            { provide: estudiante_use_cases_1.IGetEstudianteByIdUseCase, useClass: services_1.GetEstudianteByIdService },
            { provide: estudiante_use_cases_1.IListEstudiantesUseCase, useClass: services_1.ListEstudiantesService },
        ],
        exports: [estudiante_repository_1.EstudianteRepository],
    })
], EstudiantesModule);
//# sourceMappingURL=estudiantes.module.js.map