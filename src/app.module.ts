import { Module } from '@nestjs/common';
import config from './common/config/env.config';
import dbConfig from './common/config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRootAsync(dbConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
