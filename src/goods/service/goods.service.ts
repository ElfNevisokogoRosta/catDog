import { Injectable } from '@nestjs/common';
import { GoodsRepository } from '../../common/repository/goods.repository';
import { CreateGoodsDto, UpdateGoodsDto } from './goods.dto';

@Injectable()
export class GoodsService {
  constructor(private readonly goodsRepository: GoodsRepository) {}
  async createGoods(createGoodsDto: CreateGoodsDto) {
    try {
      return await this.goodsRepository.createGoods(createGoodsDto);
    } catch (e) {
      return e;
    }
  }
  async updateGoods(id: number, updateGoodsDto: UpdateGoodsDto) {
    try {
      return await this.goodsRepository.updateGoods(id, updateGoodsDto);
    } catch (e) {
      return e;
    }
  }
  async getGoodsById(id: number) {
    try {
      return await this.goodsRepository.getGood(id);
    } catch (e) {
      return e;
    }
  }
  async getAllGoods() {
    try {
      return await this.goodsRepository.getAllGoods();
    } catch (e) {
      return e;
    }
  }
  async deleteGoods(id: number) {
    try {
      console.log(id);
      return await this.goodsRepository.deleteGoods(id);
    } catch (e) {
      return e;
    }
  }
}
