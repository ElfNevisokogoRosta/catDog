import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { Category, Goods, Subcategory } from '../../../db/entity';
import { CreateGoodsDto, UpdateGoodsDto } from '../../goods/service/goods.dto';

@Injectable()
export class GoodsRepository extends Repository<Goods> {
  constructor(private readonly dataSource: DataSource) {
    super(Goods, dataSource.createEntityManager());
  }
  async createGoods(createGoodsDto: CreateGoodsDto) {
    const isGoods = await this.findOne({
      where: { name: createGoodsDto.name },
    });
    if (isGoods) {
      throw new ConflictException();
    }
    const goodsPartial: DeepPartial<Goods> = {
      ...createGoodsDto,
      category: { id: createGoodsDto.category },
      subcategory: { id: createGoodsDto.subcategory },
    };
    return await this.save(goodsPartial);
  }
  async updateGoods(id: number, updateGoodsDto: UpdateGoodsDto) {
    const isGood = await this.findOneOrFail({ where: { id } });
    if (!isGood) {
      throw new NotFoundException();
    }
    isGood.name = updateGoodsDto.name || isGood.name;
    isGood.dis = updateGoodsDto.dis || isGood.dis;
    isGood.rate = updateGoodsDto.rate || isGood.rate;
    isGood.price = updateGoodsDto.price || isGood.price;
    isGood.sales = updateGoodsDto.sales || isGood.sales;
    isGood.discount = updateGoodsDto.discount || isGood.discount;
    isGood.characteristic =
      updateGoodsDto.characteristic || isGood.characteristic;
    if (updateGoodsDto.category) {
      isGood.category = <Category>{
        id: updateGoodsDto.category,
      };
    }

    if (updateGoodsDto.subcategory) {
      isGood.subcategory = <Subcategory>{
        id: updateGoodsDto.subcategory,
      };
    }

    return await this.update(id, isGood);
  }
  async getAllGoods(): Promise<{ result: Goods[]; count: number }> {
    const [result, count] = await this.findAndCount({
      relations: ['category', 'subcategory'],
    });
    return { result, count };
  }
  async getGood(id: number) {
    const isGoods = this.findOneOrFail({
      where: { id },
      relations: ['category', 'subcategory'],
    });
    if (!isGoods) {
      throw new NotFoundException();
    }
    return isGoods;
  }
  async deleteGoods(id: number) {
    const isGoods = await this.findOneOrFail({ where: { id } });
    if (!isGoods) {
      throw new NotFoundException();
    }
    return await this.delete(id);
  }
}
