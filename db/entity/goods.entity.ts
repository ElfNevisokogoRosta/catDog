import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Subcategory } from './subcategory.entity';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  dis: string;
  @Column({ nullable: true })
  rate: number;
  @Column()
  price: number;
  @Column({ default: false })
  sales: boolean;
  @Column()
  discount: number;
  @Column('jsonb')
  characteristic: object;
  @ManyToOne(() => Category, { cascade: true })
  @JoinColumn()
  category: Category;
  @ManyToOne(() => Subcategory, { cascade: true })
  @JoinColumn()
  subcategory: Subcategory;
}
