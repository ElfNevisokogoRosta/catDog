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
import { GoodsService } from './service/goods.service';
import { CreateGoodsDto, UpdateGoodsDto } from './service/goods.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createGoods(@Body() createGoodsDto: CreateGoodsDto) {
    return await this.goodsService.createGoods(createGoodsDto);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateGoods(
    @Param('id') id: string,
    @Body() updateGoodsDto: UpdateGoodsDto,
  ) {
    return await this.goodsService.updateGoods(+id, updateGoodsDto);
  }
  @Get('all')
  async getAllGods() {
    return await this.goodsService.getAllGoods();
  }
  @Get(':id')
  async getGoods(@Param('id') id: string) {
    return await this.goodsService.getGoodsById(+id);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard('jwt'))
  async deleteGoods(@Param('id') id: string) {
    console.log(id);
    return await this.goodsService.deleteGoods(+id);
  }
}
