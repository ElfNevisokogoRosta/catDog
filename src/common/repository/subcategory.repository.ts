import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Subcategory } from '../../../db/entity';
import { SubcategoryDto } from '../../subcategory/service/subcategory.dto';

@Injectable()
export class SubcategoryRepository extends Repository<Subcategory> {
  constructor(private readonly dataSource: DataSource) {
    super(Subcategory, dataSource.createEntityManager());
  }
  async createSubcategory(createSubcategoryDto: SubcategoryDto) {
    return await this.save(createSubcategoryDto);
  }
  async updateSubcategory(id: number, createSubcategoryDto: SubcategoryDto) {
    const isSubcategory = await this.findOneOrFail({ where: { id } });
    if (!isSubcategory) {
      throw new NotFoundException();
    }
    return await this.update(id, createSubcategoryDto);
  }
  async getSubcategory(id: number) {
    const isSubcategory = await this.findOneOrFail({ where: { id } });
    if (!isSubcategory) {
      throw new NotFoundException();
    }
    return isSubcategory;
  }
  async deleteSubcategory(id: number) {
    const isSubcategory = await this.findOneOrFail({ where: { id } });
    if (!isSubcategory) {
      throw new NotFoundException();
    }
    return await this.delete(id);
  }
}
