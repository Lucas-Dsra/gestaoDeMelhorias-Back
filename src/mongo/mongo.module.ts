import { Module } from '@nestjs/common';
import { mongoProvider } from './mongo.providers';
import { userProviders } from './schemas/users.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [...mongoProvider, ...userProviders],
  exports: [...mongoProvider, ...userProviders],
})
export class MongoModule {}
