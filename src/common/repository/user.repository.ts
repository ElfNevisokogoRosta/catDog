import { Injectable } from '@nestjs/common';
import { User } from 'db/entity';
import { CreateUserDto } from 'src/users/userDto/user.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(userInfo: CreateUserDto): Promise<User> {
    return await this.save(userInfo);
  }
}
