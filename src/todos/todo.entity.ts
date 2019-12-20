import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty  } from '@nestjs/swagger';

@Entity()
export class Todo {

  @ApiModelProperty ()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty ()
  @Column('text')
  text: string;

  @ApiModelProperty ()
  @Column()
  completed: boolean;

}