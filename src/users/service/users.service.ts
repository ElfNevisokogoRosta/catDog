import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './create_user.dto';
import { UsersRepository } from '../../common/repository/users.repository';
@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userRepository.createUser(createUserDto);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...newUserData } = newUser;
      return newUserData;
    } catch (e) {
      return e;
    }
  }
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.userRepository.updateUser(id, updateUserDto);
    } catch (e) {
      return e;
    }
  }
  async getUser(id: number) {
    try {
      const user = await this.userRepository.getUser(id);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...data } = user;
      return data;
    } catch (e) {
      return e;
    }
  }
  async deleteUser(id: number) {
    try {
      return await this.userRepository.deleteUser(id);
    } catch (e) {
      return e;
    }
  }
  async getUserInfo(email: string) {
    try {
      return await this.userRepository.getUserInfo(email)
    } catch (e) {
      return e;
    }
  }
}
