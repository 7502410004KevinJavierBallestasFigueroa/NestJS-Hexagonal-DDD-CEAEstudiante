import { ValueObject } from '../../shared/value-object';
interface FechaNacimientoProps {
    value: Date;
}
export declare class FechaNacimiento extends ValueObject<FechaNacimientoProps> {
    protected readonly props: FechaNacimientoProps;
    constructor(value: Date | string);
    get value(): Date;
    private calculateAge;
}
export {};
