import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface EstudianteIdProps {
  value: string;
}

export class EstudianteId extends ValueObject<EstudianteIdProps> {
  protected readonly props: EstudianteIdProps;

  private constructor(value: string) {
    super();
    if (!value) {
      throw new Error('El id del estudiante es obligatorio');
    }
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): EstudianteId {
    return new EstudianteId(randomUUID());
  }

  static from(value: string): EstudianteId {
    return new EstudianteId(value);
  }
}
