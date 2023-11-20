import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { IUser } from 'src/interfaces/interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PassPipe implements PipeTransform {
  constructor() {}
  async transform(value: IUser, metadata: ArgumentMetadata) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(value.password, saltOrRounds);
      const userInfo = { ...value, password: hash };
      return userInfo;
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
