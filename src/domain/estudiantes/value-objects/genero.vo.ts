import { ValueObject } from '../../shared/value-object';

export type GeneroTipo = 'M' | 'F' | 'OTRO';

interface GeneroProps {
  value: GeneroTipo;
}

const PERMITIDOS: GeneroTipo[] = ['M', 'F', 'OTRO'];

export class Genero extends ValueObject<GeneroProps> {
  protected readonly props: GeneroProps;

  constructor(value: string) {
    super();
    const upper = value?.trim().toUpperCase() as GeneroTipo;
    if (!upper) {
      throw new Error('El género es obligatorio');
    }
    if (!PERMITIDOS.includes(upper)) {
      throw new Error('El género debe ser M, F u OTRO');
    }
    this.props = { value: upper };
  }

  get value(): GeneroTipo {
    return this.props.value;
  }
}
