import { DataSource } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_HOST,
  entities: ['./db/entity/index.ts'],
  migrations: ['./db/migrations/*.ts'],
});
console.log(AppDataSource);
AppDataSource.initialize()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err) => {
    console.error(`Err during Data Source init: ${err}`);
  });
