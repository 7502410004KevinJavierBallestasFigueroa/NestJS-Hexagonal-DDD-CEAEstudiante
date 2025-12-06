import { CreateEstudianteCommand } from '../../dto/command/create-estudiante.command';
import { DeleteEstudianteCommand } from '../../dto/command/delete-estudiante.command';
import { UpdateEstudianteCommand } from '../../dto/command/update-estudiante.command';
import { GetEstudianteByIdQuery } from '../../dto/query/get-estudiante-by-id.query';
import { ListEstudiantesQuery } from '../../dto/query/list-estudiantes.query';
import { EstudianteListResponse } from '../../dto/response/estudiante-list.response';
import { EstudianteResponse } from '../../dto/response/estudiante.response';

export abstract class ICreateEstudianteUseCase {
  abstract execute(command: CreateEstudianteCommand): Promise<EstudianteResponse>;
}

export abstract class IUpdateEstudianteUseCase {
  abstract execute(command: UpdateEstudianteCommand): Promise<EstudianteResponse>;
}

export abstract class IDeleteEstudianteUseCase {
  abstract execute(command: DeleteEstudianteCommand): Promise<void>;
}

export abstract class IGetEstudianteByIdUseCase {
  abstract execute(query: GetEstudianteByIdQuery): Promise<EstudianteResponse | null>;
}

export abstract class IListEstudiantesUseCase {
  abstract execute(query: ListEstudiantesQuery): Promise<EstudianteListResponse>;
}
