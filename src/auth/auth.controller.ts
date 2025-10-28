import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { LocalAuthGuard } from './auth.local.guard';
import { IUser } from 'src/users/users.interface';

interface RequestWithUser extends Request {
  user: IUser; // ou o tipo que você estiver usando para o usuário
}

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = req.user;

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return {
      mensagem: 'Login realizado com sucesso',
    };
  }
}
