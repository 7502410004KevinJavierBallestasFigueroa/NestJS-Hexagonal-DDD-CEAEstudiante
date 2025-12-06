import { ValueObject } from '../../shared/value-object';

interface NombreProps {
  value: string;
}

const isLettersAndSpaces = (value: string): boolean => /^[A-Za-zÀ-ÿ\s]+$/.test(value);

export class Nombre extends ValueObject<NombreProps> {
  protected readonly props: NombreProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nombre es obligatorio');
    }
    if (trimmed.length < 3 || trimmed.length > 20) {
      throw new Error('El nombre debe tener entre 3 y 20 caracteres');
    }
    if (!isLettersAndSpaces(trimmed)) {
      throw new Error('El nombre solo puede contener letras y espacios');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
