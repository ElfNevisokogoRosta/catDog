import { Injectable } from '@nestjs/common';
import { ResponseRepository } from '../../common/repository/response.repository';
import { CreateResponseDto, UpdateResponseDto } from './response.dto';

@Injectable()
export class ResponseService {
  constructor(private readonly responseRepository: ResponseRepository) {}
  async createResponse(createResponseDto: CreateResponseDto) {
    try {
      return await this.responseRepository.createResponse(createResponseDto);
    } catch (e) {
      return e;
    }
  }
  async getResponse(id: number) {
    try {
      return await this.responseRepository.getResponse(id);
    } catch (e) {
      return e;
    }
  }
  async updateResponse(id: number, updateResponseDto: UpdateResponseDto) {
    try {
      return await this.responseRepository.updateResponse(
        id,
        updateResponseDto,
      );
    } catch (e) {
      return e;
    }
  }
  async deleteResponse(id: number) {
    try {
      return await this.responseRepository.deleteResponse(id);
    } catch (e) {
      return e;
    }
  }
}
