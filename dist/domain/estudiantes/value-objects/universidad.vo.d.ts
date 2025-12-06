import { ValueObject } from '../../shared/value-object';
interface UniversidadProps {
    value: string;
}
export declare class Universidad extends ValueObject<UniversidadProps> {
    protected readonly props: UniversidadProps;
    constructor(value: string);
    get value(): string;
}
export {};
