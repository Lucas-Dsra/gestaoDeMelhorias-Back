import { Inject, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import type { IUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<IUser>,
  ) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<string> {
    const passwordCrypt = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      name: name,
      email: email,
      password: passwordCrypt,
    });

    await user.save();

    const result = 'Usuário Criado';
    return result;
  }

  async getUser(email: string): Promise<IUser> {
    const user = await this.userModel.findOne({ email }).exec();

    if (!user) throw Error('Usuário não existe');
    return user;
  }
}
