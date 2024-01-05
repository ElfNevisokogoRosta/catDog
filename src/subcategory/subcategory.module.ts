import { Module } from '@nestjs/common';
import { SubcategoryService } from './service/subcategory.service';
import { SubcategoryRepository } from '../common/repository/subcategory.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategory } from '../../db/entity';
import { SubcategoryController } from './subcategory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory])],
  providers: [SubcategoryService, SubcategoryRepository],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
