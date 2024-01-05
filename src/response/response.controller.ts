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
import { ResponseService } from './service/response.service';
import { CreateResponseDto, UpdateResponseDto } from './service/response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createResponse(@Body() createResponseDto: CreateResponseDto) {
    return await this.responseService.createResponse(createResponseDto);
  }
  @Get(':id')
  async getResponse(@Param('id') id: string) {
    return await this.responseService.getResponse(+id);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateResponse(
    @Param() id: string,
    @Body() updateResponseDto: UpdateResponseDto,
  ) {
    return await this.responseService.updateResponse(+id, updateResponseDto);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteResponse(@Param('id') id: string) {
    console.log(id);
    return await this.responseService.deleteResponse(+id);
  }
}
