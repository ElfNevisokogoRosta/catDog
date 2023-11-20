import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IUser } from 'src/interfaces/interface';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() user: IUser): Promise<any> {
    return this.authService.signIn(user);
  }
}
