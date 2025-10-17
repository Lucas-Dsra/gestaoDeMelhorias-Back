import { IsEmail, IsString } from 'class-validator';

export class User {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
