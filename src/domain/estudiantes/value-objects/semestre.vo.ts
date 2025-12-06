import { ValueObject } from '../../shared/value-object';

interface SemestreProps {
  value: number;
}

export class Semestre extends ValueObject<SemestreProps> {
  protected readonly props: SemestreProps;

  constructor(value: number) {
    super();
    if (!Number.isInteger(value)) {
      throw new Error('El semestre debe ser un entero');
    }
    if (value < 1 || value > 10) {
      throw new Error('El semestre debe estar entre 1 y 10');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
