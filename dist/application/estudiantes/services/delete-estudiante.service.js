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
exports.DeleteEstudianteService = void 0;
const common_1 = require("@nestjs/common");
const estudiante_repository_1 = require("../../../domain/estudiantes/estudiante.repository");
const estudiante_id_vo_1 = require("../../../domain/estudiantes/value-objects/estudiante-id.vo");
let DeleteEstudianteService = class DeleteEstudianteService {
    estudianteRepository;
    constructor(estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }
    async execute(command) {
        await this.estudianteRepository.delete(estudiante_id_vo_1.EstudianteId.from(command.id));
    }
};
exports.DeleteEstudianteService = DeleteEstudianteService;
exports.DeleteEstudianteService = DeleteEstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [estudiante_repository_1.EstudianteRepository])
], DeleteEstudianteService);
//# sourceMappingURL=delete-estudiante.service.js.map