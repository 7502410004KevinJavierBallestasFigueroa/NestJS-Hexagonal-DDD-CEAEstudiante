export class EstudianteNotFoundException extends Error {
  constructor() {
    super('Estudiante no encontrado');
  }
}

export class EmailEstudianteDuplicadoException extends Error {
  constructor(email: string) {
    super(`Ya existe un estudiante con el email ${email}`);
  }
}
