import { ValueObject } from '../../shared/value-object';
interface TelefonoProps {
    value: string;
}
export declare class Telefono extends ValueObject<TelefonoProps> {
    protected readonly props: TelefonoProps;
    constructor(value: string);
    get value(): string;
}
export {};
