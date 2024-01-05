import { Module } from '@nestjs/common';
import { ResponseController } from './response.controller';
import { ResponseService } from './service/response.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseEntity } from '../../db/entity';
import { ResponseRepository } from '../common/repository/response.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseEntity])],
  controllers: [ResponseController],
  providers: [ResponseService, ResponseRepository],
})
export class ResponseModule {}
