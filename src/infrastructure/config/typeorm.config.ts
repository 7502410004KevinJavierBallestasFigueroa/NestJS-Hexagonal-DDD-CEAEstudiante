import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserOrmEntity } from '../persistence/typeorm/entities/user.orm-entity';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';
import { EstudianteOrmEntity } from '../persistence/typeorm/entities/estudiante.orm-entity';

const DEFAULT_DATABASE_URL =
  'postgresql://kballestas:kballestas123@144.22.48.194:5432/kballestas_software';

export const buildTypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: config.get<string>('DATABASE_URL', DEFAULT_DATABASE_URL),
  entities: [UserOrmEntity, EstudianteOrmEntity, TokenBlacklistOrmEntity],
  synchronize: false, 
  logging: config.get<string>('TYPEORM_LOGGING', 'false') === 'true',
});
