import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateEstudianteService,
  DeleteEstudianteService,
  GetEstudianteByIdService,
  ListEstudiantesService,
  UpdateEstudianteService,
} from '../application/estudiantes/services';
import {
  ICreateEstudianteUseCase,
  IDeleteEstudianteUseCase,
  IGetEstudianteByIdUseCase,
  IListEstudiantesUseCase,
  IUpdateEstudianteUseCase,
} from '../application/estudiantes/ports/in/estudiante.use-cases';
import { EstudianteRepository } from '../domain/estudiantes/estudiante.repository';
import { EstudiantesController } from '../infrastructure/entrypoints/estudiantes/estudiantes.controller';
import { EstudianteOrmEntity } from '../infrastructure/persistence/typeorm/entities/estudiante.orm-entity';
import { EstudianteTypeOrmRepository } from '../infrastructure/persistence/typeorm/repositories/estudiante-typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EstudianteOrmEntity])],
  controllers: [EstudiantesController],
  providers: [
    { provide: EstudianteRepository, useClass: EstudianteTypeOrmRepository },
    { provide: ICreateEstudianteUseCase, useClass: CreateEstudianteService },
    { provide: IUpdateEstudianteUseCase, useClass: UpdateEstudianteService },
    { provide: IDeleteEstudianteUseCase, useClass: DeleteEstudianteService },
    { provide: IGetEstudianteByIdUseCase, useClass: GetEstudianteByIdService },
    { provide: IListEstudiantesUseCase, useClass: ListEstudiantesService },
  ],
  exports: [EstudianteRepository],
})
export class EstudiantesModule {}
