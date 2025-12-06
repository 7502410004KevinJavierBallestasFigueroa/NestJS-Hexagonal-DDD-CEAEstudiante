import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiOperation } from '@nestjs/swagger';
import {
  ICreateEstudianteUseCase,
  IDeleteEstudianteUseCase,
  IGetEstudianteByIdUseCase,
  IListEstudiantesUseCase,
  IUpdateEstudianteUseCase,
} from '../../../application/estudiantes/ports/in/estudiante.use-cases';
import { CreateEstudianteRequest } from './dto/create-estudiante.request';
import { UpdateEstudianteRequest } from './dto/update-estudiante.request';
import { CreateEstudianteCommand } from '../../../application/estudiantes/dto/command/create-estudiante.command';
import { UpdateEstudianteCommand } from '../../../application/estudiantes/dto/command/update-estudiante.command';
import { DeleteEstudianteCommand } from '../../../application/estudiantes/dto/command/delete-estudiante.command';
import { GetEstudianteByIdQuery } from '../../../application/estudiantes/dto/query/get-estudiante-by-id.query';
import { ListEstudiantesQuery } from '../../../application/estudiantes/dto/query/list-estudiantes.query';
import { DomainExceptionFilter } from '../common/domain-exception.filter';

@Controller('estudiantes')
@UseFilters(new DomainExceptionFilter())
export class EstudiantesController {
  constructor(
    private readonly createUseCase: ICreateEstudianteUseCase,
    private readonly updateUseCase: IUpdateEstudianteUseCase,
    private readonly deleteUseCase: IDeleteEstudianteUseCase,
    private readonly getByIdUseCase: IGetEstudianteByIdUseCase,
    private readonly listUseCase: IListEstudiantesUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear estudiante' })
  create(@Body() request: CreateEstudianteRequest) {
    const command = request as unknown as CreateEstudianteCommand;
    return this.createUseCase.execute(command);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener estudiante por ID' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  getById(@Param('id') id: string) {
    const query = new GetEstudianteByIdQuery();
    query.id = id;
    return this.getByIdUseCase.execute(query);
  }

  @Get()
  @ApiOperation({ summary: 'Listar Estudiantes' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiQuery({ name: 'searchTerm', required: false, type: String })
  @ApiQuery({ name: 'email', required: false, type: String })
  @ApiQuery({ name: 'genero', required: false, type: String })
  @ApiQuery({ name: 'programa', required: false, type: String })
  @ApiQuery({ name: 'universidad', required: false, type: String })
  @ApiQuery({ name: 'semestre', required: false, type: Number })
  list(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('searchTerm') searchTerm?: string,
    @Query('email') email?: string,
    @Query('genero') genero?: string,
    @Query('programa') programa?: string,
    @Query('universidad') universidad?: string,
    @Query('semestre') semestre?: string,
  ) {
    const query = new ListEstudiantesQuery();
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

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar Estudiante' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  update(@Param('id') id: string, @Body() request: UpdateEstudianteRequest) {
    const command = request as unknown as UpdateEstudianteCommand;
    command.id = id;
    return this.updateUseCase.execute(command);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar estudiante' })
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  delete(@Param('id') id: string) {
    const command = new DeleteEstudianteCommand();
    command.id = id;
    return this.deleteUseCase.execute(command);
  }
}
