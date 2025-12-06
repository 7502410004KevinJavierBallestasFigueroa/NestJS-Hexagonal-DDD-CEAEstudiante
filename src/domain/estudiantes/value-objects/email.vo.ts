import { ValueObject } from '../../shared/value-object';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  protected readonly props: EmailProps;

  constructor(value: string) {
    super();
    const normalized = value?.trim().toLowerCase();
    if (!normalized) {
      throw new Error('El email es obligatorio');
    }
    if (!normalized.includes('@') || (!normalized.endsWith('.com') && !normalized.endsWith('.co'))) {
      throw new Error('El email debe contener @ y terminar en .com o .co');
    }
    if (/\s/.test(normalized)) {
      throw new Error('El email no debe contener espacios');
    }
    this.props = { value: normalized };
  }

  get value(): string {
    return this.props.value;
  }
}
