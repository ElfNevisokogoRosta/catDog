import { registerAs } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

const database = registerAs('database', () => ({
  type: process.env.DB_TYPE,
  ulr: process.env.DB_HOST,
}));
export default {
  envFilePath: `.env`,
  validationSchema: Joi.object({
    DB_HOST: Joi.string().required(),
  }),
  load: [database],
  isGlobal: true,
};
