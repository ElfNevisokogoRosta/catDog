import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/common/repository/user.repository';
import { CreateUserDto } from '../userDto/user.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    try {
      return await this.userRepository.createUser(createUserDto);
    } catch (error) {
      return console.log(error);
    }
  }
}
