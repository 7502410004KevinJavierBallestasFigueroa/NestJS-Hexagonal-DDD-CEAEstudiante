import { ValueObject } from '../../shared/value-object';
interface SemestreProps {
    value: number;
}
export declare class Semestre extends ValueObject<SemestreProps> {
    protected readonly props: SemestreProps;
    constructor(value: number);
    get value(): number;
}
export {};
