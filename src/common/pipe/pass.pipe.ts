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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: IUser, _metadata: ArgumentMetadata) {
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
