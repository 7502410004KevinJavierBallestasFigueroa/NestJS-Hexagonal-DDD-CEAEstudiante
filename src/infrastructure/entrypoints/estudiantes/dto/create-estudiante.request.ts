import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsIn, IsNotEmpty, IsNumber, IsString, Length, MaxLength, Min, MinLength } from 'class-validator';

const GENEROS = ['M', 'F', 'OTRO'];

export class CreateEstudianteRequest {
  @ApiProperty({ example: 'Carlos' })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  nombre!: string;

  @ApiProperty({ example: 'Perez' })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  apellido!: string;

  @ApiProperty({ example: '2000-01-01' })
  @IsDateString()
  fechaNacimiento!: string;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @Min(1)
  semestre!: number;

  @ApiProperty({ example: 'carlos@correo.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'M', enum: GENEROS })
  @IsString()
  @IsIn(GENEROS)
  genero!: string;

  @ApiProperty({ example: '3001234567' })
  @IsString()
  @Length(10, 10)
  telefono!: string;

  @ApiProperty({ example: 'Ingenieria de Sistemas' })
  @IsString()
  @IsNotEmpty()
  programa!: string;

  @ApiProperty({ example: 'Universidad Nacional' })
  @IsString()
  @IsNotEmpty()
  universidad!: string;
}
