import { ValueObject } from '../../shared/value-object';

interface FechaNacimientoProps {
  value: Date;
}

export class FechaNacimiento extends ValueObject<FechaNacimientoProps> {
  protected readonly props: FechaNacimientoProps;

  constructor(value: Date | string) {
    super();
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new Error('La fecha de nacimiento no es válida');
    }
    const now = new Date();
    if (date >= now) {
      throw new Error('La fecha de nacimiento debe ser en el pasado');
    }
    const age = this.calculateAge(date, now);
    if (age < 15) {
      throw new Error('El estudiante debe tener al menos 15 años');
    }
    this.props = { value: date };
  }

  get value(): Date {
    return this.props.value;
  }

  private calculateAge(date: Date, now: Date): number {
    let age = now.getFullYear() - date.getFullYear();
    const m = now.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < date.getDate())) {
      age--;
    }
    return age;
  }
}
