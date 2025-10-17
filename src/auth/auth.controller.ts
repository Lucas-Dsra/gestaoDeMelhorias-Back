import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() auth: AuthDto) {
    const result = await this.authService.login(auth.email, auth.password);

    return result;
  }
}
