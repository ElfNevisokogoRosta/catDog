import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import config from './common/config/env.config';
import dbConfig from './common/config/db.confgin';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRootAsync(dbConfig),
    UsersModule,
    AuthModule,
    TasksModule,
  ],
  controllers: [
    AppController,
    UsersController,
    TasksController,
    AuthController,
  ],
  providers: [AppService],
})
export class AppModule {}
