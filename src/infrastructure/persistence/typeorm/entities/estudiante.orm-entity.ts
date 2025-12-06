import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estudiantes' })
export class EstudianteOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 20 })
  nombre!: string;

  @Column({ length: 20 })
  apellido!: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento!: Date;

  @Column({ type: 'int' })
  semestre!: number;

  @Column({ length: 150, unique: true })
  email!: string;

  @Column({ length: 10 })
  genero!: string;

  @Column({ length: 20 })
  telefono!: string;

  @Column({ length: 100 })
  programa!: string;

  @Column({ length: 120 })
  universidad!: string;

  @Column({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt?: Date | null;
}
