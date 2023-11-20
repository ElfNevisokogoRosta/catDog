import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from 'db/entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async userInfo(id: number): Promise<User> {
    return await this.findOneBy({ id });
  }
  async registerUser(userInfo): Promise<User> {
    return await this.save(userInfo);
  }
  async getUserInfo({ userName }): Promise<User> {
    const user = await this.findOneBy({
      userName: userName,
    });
    return user;
  }
  async loginUser(id, token) {
    try {
      return await this.update({ id }, { token });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
