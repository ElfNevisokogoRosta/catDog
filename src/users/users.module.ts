import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './service/users.service';
import { UsersRepository } from 'src/common/repository/user.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
