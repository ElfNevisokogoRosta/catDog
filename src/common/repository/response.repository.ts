import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ResponseEntity } from '../../../db/entity';
import {
  CreateResponseDto,
  UpdateResponseDto,
} from '../../response/service/response.dto';

@Injectable()
export class ResponseRepository extends Repository<ResponseEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ResponseEntity, dataSource.createEntityManager());
  }
  async createResponse(createResponseDto: CreateResponseDto) {
    const response: DeepPartial<ResponseEntity> = {
      ...createResponseDto,
      goods: { id: createResponseDto.goods },
      user: { id: createResponseDto.user },
    };
    return await this.save(response);
  }
  async updateResponse(id: number, updateResponseDto: UpdateResponseDto) {
    const isResponse = await this.findOneOrFail({ where: { id } });
    if (!isResponse) {
      throw NotFoundException;
    }
    isResponse.responce = updateResponseDto.responce || isResponse.responce;
    return await this.update(id, isResponse);
  }
  async getResponse(id: number) {
    const response = await this.findOneOrFail({ where: { id } });
    if (!response) {
      throw NotFoundException;
    }
    return response;
  }
  async deleteResponse(id: number) {
    const response = await this.findOneOrFail({ where: { id } });
    if (!response) {
      throw NotFoundException;
    }
    return response;
  }
}
