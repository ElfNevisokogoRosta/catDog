import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './service/category.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }
  @Get(':id')
  async getCategory(@Param('id') id: string) {
    return await this.categoryService.getCategory(+id);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory(+id, updateCategoryDto);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(+id);
  }
}
