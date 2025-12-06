import { ValueObject } from '../../shared/value-object';
interface ProgramaProps {
    value: string;
}
export declare class Programa extends ValueObject<ProgramaProps> {
    protected readonly props: ProgramaProps;
    constructor(value: string);
    get value(): string;
}
export {};
