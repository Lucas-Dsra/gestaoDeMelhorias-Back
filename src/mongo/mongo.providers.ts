import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const mongoProvider = [
  {
    provide: 'gestaoDeMelhorias',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService): Promise<typeof mongoose> =>
      mongoose.connect(configService.get<string>('dbmongo')!),
  },
];
