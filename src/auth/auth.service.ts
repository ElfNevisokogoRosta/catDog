import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from '../common/types/IUser';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  jwtSecret = this.configService.get<string>('JWT_SECRET');
  refreshSecret = this.configService.get<string>('JWT_SECRET_REFRESH');
  async validateUser(email: string, password: string): Promise<IUser> {
    try {
      const user = await this.userService.getUserInfo(email);
      if (user && (await bcrypt.compare(password, user.password))) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
      }
    } catch (e) {
      return e;
    }
  }
  async signIn(user: { email: string; password: string }) {
    const isUser = await this.validateUser(user.email, user.password);
    const payload = { username: isUser.username, sub: isUser.id };
    const token = this.jwtService.sign(payload, {
      secret: this.jwtSecret,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.refreshSecret,
    });
    return {
      access_token: token,
      id: isUser.id,
      refresh_token: refreshToken,
      username: isUser.username,
    };
  }
}
