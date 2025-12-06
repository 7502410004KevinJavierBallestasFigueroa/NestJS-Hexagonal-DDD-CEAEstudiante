import { ValueObject } from '../../shared/value-object';
interface ApellidoProps {
    value: string;
}
export declare class Apellido extends ValueObject<ApellidoProps> {
    protected readonly props: ApellidoProps;
    constructor(value: string);
    get value(): string;
}
export {};
