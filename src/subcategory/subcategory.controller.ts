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
import { SubcategoryService } from './service/subcategory.service';
import { SubcategoryDto } from './service/subcategory.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createSubcategory(@Body() subcategoryDto: SubcategoryDto) {
    return await this.subcategoryService.createSubcategory(subcategoryDto);
  }
  @Get(':id')
  async getSubcategory(@Param('id') id: string) {
    return await this.subcategoryService.getSubcategory(+id);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateSubcategory(
    @Param('id') id: string,
    @Body() subcategoryDto: SubcategoryDto,
  ) {
    return await this.subcategoryService.updateSubcategory(+id, subcategoryDto);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteSubcategory(@Param('id') id: string) {
    return await this.subcategoryService.deleteSubcategory(+id);
  }
}
