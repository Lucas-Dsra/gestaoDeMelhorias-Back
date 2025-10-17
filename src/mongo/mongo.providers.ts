import * as mongoose from 'mongoose';

export const mongoProvider = [
  {
    provide: 'gestaoDeMelhorias',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://lucasdev:1234@127.0.0.1:27017/gestaoDeMelhorias?authSource=admin',
      ),
  },
];
