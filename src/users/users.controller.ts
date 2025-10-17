import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import  { User } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async postUser(@Body() user: User): Promise<string> {
    try {
      const result = await this.userService.createUser(
        user.name,
        user.email,
        user.password,
      );
      return result;
    } catch (error) {
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }
}
