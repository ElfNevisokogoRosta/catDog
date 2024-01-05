import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from '../../db/entity';
import { GoodsService } from './service/goods.service';
import { GoodsRepository } from '../common/repository/goods.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [GoodsService, GoodsRepository],
})
export class GoodsModule {}
