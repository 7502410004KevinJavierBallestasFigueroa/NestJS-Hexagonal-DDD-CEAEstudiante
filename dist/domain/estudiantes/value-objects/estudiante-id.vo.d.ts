import { ValueObject } from '../../shared/value-object';
interface EstudianteIdProps {
    value: string;
}
export declare class EstudianteId extends ValueObject<EstudianteIdProps> {
    protected readonly props: EstudianteIdProps;
    private constructor();
    get value(): string;
    static new(): EstudianteId;
    static from(value: string): EstudianteId;
}
export {};
