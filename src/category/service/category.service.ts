import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../common/repository/category.repository';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryRepository.createCategory(createCategoryDto);
    } catch (e) {
      return e;
    }
  }
  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.categoryRepository.updateCategory(
        id,
        updateCategoryDto,
      );
    } catch (e) {
      return e;
    }
  }
  async getCategory(id: number) {
    try {
      return await this.categoryRepository.getCategory(id);
    } catch (e) {
      return e;
    }
  }
  async deleteCategory(id: number) {
    try {
      return await this.categoryRepository.deleteCategory(id);
    } catch (e) {
      return e;
    }
  }
}
