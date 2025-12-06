import { ValueObject } from '../../shared/value-object';

interface UniversidadProps {
  value: string;
}

const UNIVERSIDADES_PERMITIDAS = [
  'universidad nacional',
  'universidad de los andes',
  'universidad javeriana',
  'universidad del valle',
  'universidad eafit',
  'universidad distrital',
];

export class Universidad extends ValueObject<UniversidadProps> {
  protected readonly props: UniversidadProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La universidad es obligatoria');
    }
    const normalized = trimmed.toLowerCase();
    if (!UNIVERSIDADES_PERMITIDAS.includes(normalized)) {
      throw new Error('La universidad no está en la lista permitida');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
