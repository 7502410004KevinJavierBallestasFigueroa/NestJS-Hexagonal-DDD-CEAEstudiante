import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

const GENEROS = ['M', 'F', 'OTRO'];

export class UpdateEstudianteRequest {
  @ApiPropertyOptional({ example: 'Carlos' })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(20)
  nombre?: string;

  @ApiPropertyOptional({ example: 'Perez' })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(20)
  apellido?: string;

  @ApiPropertyOptional({ example: '2000-01-01' })
  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @ApiPropertyOptional({ example: 4 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  semestre?: number;

  @ApiPropertyOptional({ example: 'nuevo@correo.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'F', enum: GENEROS })
  @IsOptional()
  @IsString()
  @IsIn(GENEROS)
  genero?: string;

  @ApiPropertyOptional({ example: '3001234567' })
  @IsOptional()
  @IsString()
  @Length(10, 10)
  telefono?: string;

  @ApiPropertyOptional({ example: 'Ingenieria Industrial' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  programa?: string;

  @ApiPropertyOptional({ example: 'Universidad de los Andes' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  universidad?: string;
}
