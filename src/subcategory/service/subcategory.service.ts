import { Injectable } from '@nestjs/common';
import { SubcategoryRepository } from '../../common/repository/subcategory.repository';
import { SubcategoryDto } from './subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private readonly subcategoryRepository: SubcategoryRepository) {}

  async createSubcategory(createSubcategory: SubcategoryDto) {
    try {
      return await this.subcategoryRepository.createSubcategory(
        createSubcategory,
      );
    } catch (e) {
      return e;
    }
  }
  async updateSubcategory(id: number, createSubcategory: SubcategoryDto) {
    try {
      return await this.subcategoryRepository.updateSubcategory(
        id,
        createSubcategory,
      );
    } catch (e) {
      return e;
    }
  }
  async getSubcategory(id: number) {
    try {
      return await this.subcategoryRepository.getSubcategory(id);
    } catch (e) {
      return e;
    }
  }
  async deleteSubcategory(id: number) {
    try {
      return await this.subcategoryRepository.deleteSubcategory(id);
    } catch (e) {
      return e;
    }
  }
}
