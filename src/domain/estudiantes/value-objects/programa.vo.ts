import { ValueObject } from '../../shared/value-object';

interface ProgramaProps {
  value: string;
}

const PROGRAMAS_PERMITIDOS = [
  'ingenieria de sistemas',
  'ingenieria industrial',
  'derecho',
  'medicina',
  'administracion',
  'contaduria',
];

export class Programa extends ValueObject<ProgramaProps> {
  protected readonly props: ProgramaProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El programa es obligatorio');
    }
    const normalized = trimmed.toLowerCase();
    if (!PROGRAMAS_PERMITIDOS.includes(normalized)) {
      throw new Error('El programa no está en la lista permitida');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
