import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../../../db/entity';
import {
  CreateUserDto,
  UpdateUserDto,
} from '../../users/service/create_user.dto';
@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(user: CreateUserDto): Promise<User> {
    const isUser = await this.findOne({ where: { email: user.email } });
    if (isUser) {
      throw new ConflictException();
    }
    return await this.save(user);
  }

  async updateUser(id: number, userUpdInfo: UpdateUserDto) {
    const isUser = await this.findOneOrFail({ where: { id } });
    if (!isUser) {
      throw new NotFoundException();
    }
    return await this.update(id, { ...userUpdInfo });
  }
  async deleteUser(id: number) {
    const isUser = await this.findOneOrFail({ where: { id } });
    if (!isUser) {
      throw new NotFoundException();
    }
    return await this.delete(id);
  }
  async getUser(id: number) {
    const isUser = await this.findOneOrFail({ where: { id } });
    if (!isUser) {
      throw new NotFoundException();
    }
    return isUser;
  }
  async getUserInfo(email: string) {
    const isUser = await this.findOneOrFail({ where: { email } });
    if (!isUser) {
      throw new NotFoundException();
    }
    return isUser;
  }
}
