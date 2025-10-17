import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcrypt';
import { IUser } from 'src/users/users.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async login(email: string, password: string) {
    const user: IUser = await this.userService.getUser(email);

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) throw new UnauthorizedException('Usuário não autorizado');

    return 'Autorizado';
  }
}
