import { Connection } from 'mongoose';
import { UserSchema } from 'src/mongo/schemas/user.schema';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['gestaoDeMelhorias'],
  },
];
