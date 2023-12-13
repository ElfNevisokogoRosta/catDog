import { Controller, Post, UsePipes, Body } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { ZodValidationPipe } from 'src/common/pipe/zodValidations.pipe';
import { CreateUserDto, createUserSchema } from './userDto/user.dto';
import { PassPipe } from 'src/common/pipe/pass.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  // @UsePipes(new PassPipe())
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.userService.create(createUserDto);
  }
}
