export class ListEstudiantesQuery {
  page = 1;
  pageSize = 10;
  searchTerm?: string;
  email?: string;
  genero?: string;
  programa?: string;
  universidad?: string;
  semestre?: number;
}
