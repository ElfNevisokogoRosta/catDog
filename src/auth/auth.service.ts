import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/interfaces/interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.userService.getUserInfo(userName);
    if (user && bcrypt.compare(user.password, password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async signIn(user: IUser): Promise<any> {
    const payLoad = { userName: user.userName, sub: user.id };

    return {
      access_token: this.jwtService.sign(payLoad),
    };
  }
}
