import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column()
  actived: boolean;

  @Column()
  completed: boolean;

}