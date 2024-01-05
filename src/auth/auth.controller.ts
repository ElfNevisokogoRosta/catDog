import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { IUser } from '../common/types/IUser';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async signIn(@Body() user: IUser) {
    return await this.authService.signIn(user);
  }
  @Post('refresh')
  @UseGuards(AuthGuard('jwt-refresh'))
  async refresh(@Request() req: any) {
    const { user } = req;
    return await this.authService.signIn(user);
  }
}
