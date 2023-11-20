import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { IUser } from 'src/interfaces/interface';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async registerUser(userInfo: IUser) {
    const { userName } = userInfo;
    const isUser = this.usersRepository.findOneBy({ userName });
    if (isUser) {
      throw new ConflictException();
    }
    const newUser = { ...userInfo, token: '' };
    return await this.usersRepository.registerUser(newUser);
  }
  async getUserInfo(user) {
    return await this.usersRepository.getUserInfo(user);
  }
  async userInfo({ id }) {
    const userInfo = await this.usersRepository.userInfo(parseInt(id));
    const { password, ...result } = userInfo;
    return result;
  }
  async loginUser(id, token) {
    return await this.usersRepository.loginUser(id, token);
  }
}
