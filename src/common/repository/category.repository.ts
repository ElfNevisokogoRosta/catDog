import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Category } from '../../../db/entity';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../category/service/category.dto';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(private readonly dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }
  async createCategory(category: CreateCategoryDto) {
    const isCategory = await this.findOne({
      where: { name: category.name },
    });
    if (isCategory) {
      throw ConflictException;
    }
    return await this.save(category);
  }
  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    const isCategory = await this.findOneOrFail({ where: { id } });
    if (!isCategory) {
      throw NotFoundException;
    }
    return await this.update(id, { ...updateCategoryDto });
  }
  async getCategory(id: number) {
    const isCategory = await this.findOneOrFail({ where: { id } });
    if (!isCategory) {
      throw NotFoundException;
    }
    return isCategory;
  }
  async deleteCategory(id: number) {
    const isCategory = await this.findOneOrFail({ where: { id } });
    if (!isCategory) {
      throw NotFoundException;
    }
    return await this.delete(id);
  }
}
