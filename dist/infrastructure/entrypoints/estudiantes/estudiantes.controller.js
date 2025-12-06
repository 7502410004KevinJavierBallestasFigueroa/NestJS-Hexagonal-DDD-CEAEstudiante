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
exports.EstudiantesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const estudiante_use_cases_1 = require("../../../application/estudiantes/ports/in/estudiante.use-cases");
const create_estudiante_request_1 = require("./dto/create-estudiante.request");
const update_estudiante_request_1 = require("./dto/update-estudiante.request");
const delete_estudiante_command_1 = require("../../../application/estudiantes/dto/command/delete-estudiante.command");
const get_estudiante_by_id_query_1 = require("../../../application/estudiantes/dto/query/get-estudiante-by-id.query");
const list_estudiantes_query_1 = require("../../../application/estudiantes/dto/query/list-estudiantes.query");
const domain_exception_filter_1 = require("../common/domain-exception.filter");
let EstudiantesController = class EstudiantesController {
    createUseCase;
    updateUseCase;
    deleteUseCase;
    getByIdUseCase;
    listUseCase;
    constructor(createUseCase, updateUseCase, deleteUseCase, getByIdUseCase, listUseCase) {
        this.createUseCase = createUseCase;
        this.updateUseCase = updateUseCase;
        this.deleteUseCase = deleteUseCase;
        this.getByIdUseCase = getByIdUseCase;
        this.listUseCase = listUseCase;
    }
    create(request) {
        const command = request;
        return this.createUseCase.execute(command);
    }
    getById(id) {
        const query = new get_estudiante_by_id_query_1.GetEstudianteByIdQuery();
        query.id = id;
        return this.getByIdUseCase.execute(query);
    }
    list(page = 1, pageSize = 10, searchTerm, email, genero, programa, universidad, semestre) {
        const query = new list_estudiantes_query_1.ListEstudiantesQuery();
        query.page = Number(page) || 1;
        query.pageSize = Number(pageSize) || 10;
        query.searchTerm = searchTerm;
        query.email = email?.toLowerCase();
        query.genero = genero;
        query.programa = programa;
        query.universidad = universidad;
        const semestreNum = semestre !== undefined ? Number(semestre) : undefined;
        query.semestre = semestreNum && !Number.isNaN(semestreNum) ? semestreNum : undefined;
        return this.listUseCase.execute(query);
    }
    update(id, request) {
        const command = request;
        command.id = id;
        return this.updateUseCase.execute(command);
    }
    delete(id) {
        const command = new delete_estudiante_command_1.DeleteEstudianteCommand();
        command.id = id;
        return this.deleteUseCase.execute(command);
    }
};
exports.EstudiantesController = EstudiantesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear estudiante' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudiante_request_1.CreateEstudianteRequest]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener estudiante por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar Estudiantes' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'searchTerm', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'email', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'genero', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'programa', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'universidad', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'semestre', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('searchTerm')),
    __param(3, (0, common_1.Query)('email')),
    __param(4, (0, common_1.Query)('genero')),
    __param(5, (0, common_1.Query)('programa')),
    __param(6, (0, common_1.Query)('universidad')),
    __param(7, (0, common_1.Query)('semestre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Estudiante' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estudiante_request_1.UpdateEstudianteRequest]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar estudiante' }),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "delete", null);
exports.EstudiantesController = EstudiantesController = __decorate([
    (0, common_1.Controller)('estudiantes'),
    (0, common_1.UseFilters)(new domain_exception_filter_1.DomainExceptionFilter()),
    __metadata("design:paramtypes", [estudiante_use_cases_1.ICreateEstudianteUseCase,
        estudiante_use_cases_1.IUpdateEstudianteUseCase,
        estudiante_use_cases_1.IDeleteEstudianteUseCase,
        estudiante_use_cases_1.IGetEstudianteByIdUseCase,
        estudiante_use_cases_1.IListEstudiantesUseCase])
], EstudiantesController);
//# sourceMappingURL=estudiantes.controller.js.map