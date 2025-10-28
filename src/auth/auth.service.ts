import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcrypt';
import { IUser } from 'src/users/users.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<string> {
    const user: IUser = await this.userService.getUser(email);
    console.log(user);
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) throw new UnauthorizedException('Usuário não autorizado');

    const { access_token } = this.login(user);

    return access_token;
  }

  login(user: IUser) {
    const payload = { username: user.name, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
