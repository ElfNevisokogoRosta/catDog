import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Goods } from './goods.entity';

@Entity()
export class ResponseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  responce: string;

  @Column()
  rate: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Goods)
  @JoinColumn()
  goods: Goods;
}
