import { ValueObject } from '../../shared/value-object';

interface ApellidoProps {
  value: string;
}

const isLettersAndSpaces = (value: string): boolean => /^[A-Za-zÀ-ÿ\s]+$/.test(value);

export class Apellido extends ValueObject<ApellidoProps> {
  protected readonly props: ApellidoProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El apellido es obligatorio');
    }
    if (trimmed.length < 3 || trimmed.length > 20) {
      throw new Error('El apellido debe tener entre 3 y 20 caracteres');
    }
    if (!isLettersAndSpaces(trimmed)) {
      throw new Error('El apellido solo puede contener letras y espacios');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
