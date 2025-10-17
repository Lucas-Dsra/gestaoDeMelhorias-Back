import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongoModule } from 'src/mongo/mongo.module';
import { UsersService } from './users.service';

@Module({
  imports: [MongoModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
