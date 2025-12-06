import { ValueObject } from '../../shared/value-object';
interface NombreProps {
    value: string;
}
export declare class Nombre extends ValueObject<NombreProps> {
    protected readonly props: NombreProps;
    constructor(value: string);
    get value(): string;
}
export {};
