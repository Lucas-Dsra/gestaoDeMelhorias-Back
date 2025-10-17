import { Module } from '@nestjs/common';
import { mongoProvider } from './mongo.providers';
import { userProviders } from './schemas/users.providers';

@Module({
  providers: [...mongoProvider, ...userProviders],
  exports: [...mongoProvider, ...userProviders],
})
export class MongoModule {}
