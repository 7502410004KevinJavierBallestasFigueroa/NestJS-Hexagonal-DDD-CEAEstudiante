import { ValueObject } from '../../shared/value-object';
export type GeneroTipo = 'M' | 'F' | 'OTRO';
interface GeneroProps {
    value: GeneroTipo;
}
export declare class Genero extends ValueObject<GeneroProps> {
    protected readonly props: GeneroProps;
    constructor(value: string);
    get value(): GeneroTipo;
}
export {};
