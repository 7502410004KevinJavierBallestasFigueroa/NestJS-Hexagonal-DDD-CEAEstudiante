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
exports.ListEstudiantesService = void 0;
const common_1 = require("@nestjs/common");
const estudiante_repository_1 = require("../../../domain/estudiantes/estudiante.repository");
const estudiante_mapper_1 = require("../mapper/estudiante.mapper");
let ListEstudiantesService = class ListEstudiantesService {
    estudianteRepository;
    constructor(estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }
    async execute(query) {
        let estudiantes = await this.estudianteRepository.findAll();
        if (query.genero) {
            estudiantes = estudiantes.filter((e) => e.genero.value.toLowerCase() === query.genero.toLowerCase());
        }
        if (query.programa) {
            estudiantes = estudiantes.filter((e) => e.programa.value.toLowerCase() === query.programa.toLowerCase());
        }
        if (query.universidad) {
            estudiantes = estudiantes.filter((e) => e.universidad.value.toLowerCase() === query.universidad.toLowerCase());
        }
        if (query.semestre !== undefined) {
            estudiantes = estudiantes.filter((e) => e.semestre.value === query.semestre);
        }
        if (query.email) {
            estudiantes = estudiantes.filter((e) => e.email.value === query.email.toLowerCase());
        }
        if (query.searchTerm) {
            const term = query.searchTerm.toLowerCase();
            estudiantes = estudiantes.filter((e) => e.nombre.value.toLowerCase().includes(term) ||
                e.apellido.value.toLowerCase().includes(term) ||
                e.programa.value.toLowerCase().includes(term));
        }
        const total = estudiantes.length;
        const start = (query.page - 1) * query.pageSize;
        const paged = estudiantes.slice(start, start + query.pageSize);
        return estudiante_mapper_1.EstudianteMapper.toList(paged, total, query.page, query.pageSize);
    }
};
exports.ListEstudiantesService = ListEstudiantesService;
exports.ListEstudiantesService = ListEstudiantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [estudiante_repository_1.EstudianteRepository])
], ListEstudiantesService);
//# sourceMappingURL=list-estudiantes.service.js.map