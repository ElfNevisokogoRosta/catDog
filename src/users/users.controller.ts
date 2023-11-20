import {
  Body,
  Controller,
  UsePipes,
  Post,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PassPipe } from '../common/pipe/pass.pipe';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UsePipes(new PassPipe())
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.registerUser(createUserDto);
    return newUser;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  async getUserInfo(@Param() userId) {
    const user = await this.usersService.userInfo(userId);
    return user;
  }
}
