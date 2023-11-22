import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Entities from 'db/entity/index';

export default {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<unknown> => ({
    type: configService.get('database.type'),
    url: configService.get('database.url'),
    entities: Object.values(Entities),
    logging: ['error'],
  }),
  inject: [ConfigService],
};
