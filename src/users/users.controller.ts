import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  Get,
  Delete,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './service/users.service';
import { CreateUserDto, UpdateUserDto } from './service/create_user.dto';
import { AuthGuard } from '@nestjs/passport';
import { PassPipe } from '../common/pipe/pass.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UsePipes(new PassPipe())
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.updateUser(+id, updateUserDto);
  }
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUser(+id);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(+id);
  }
}
