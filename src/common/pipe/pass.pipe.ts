import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { IUser } from '../types/IUser';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PassPipe implements PipeTransform {
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: IUser, _metadata: ArgumentMetadata) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(value.password, saltOrRounds);
      return { ...value, password: hash };
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
