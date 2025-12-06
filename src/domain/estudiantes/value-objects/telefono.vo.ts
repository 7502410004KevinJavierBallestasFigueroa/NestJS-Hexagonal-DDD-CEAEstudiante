import { ValueObject } from '../../shared/value-object';

interface TelefonoProps {
  value: string;
}

export class Telefono extends ValueObject<TelefonoProps> {
  protected readonly props: TelefonoProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El teléfono es obligatorio');
    }
    if (!/^[0-9]+$/.test(trimmed)) {
      throw new Error('El teléfono solo debe contener dígitos');
    }
    if (trimmed.length !== 10) {
      throw new Error('El teléfono debe tener 10 dígitos');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
