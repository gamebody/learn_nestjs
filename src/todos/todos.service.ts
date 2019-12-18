import { Injectable } from '@nestjs/common';
import { Todo as todoIterface, IUpdateTodo } from './interfaces/todo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>
    ){}

    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find()
    }

    async create(todo: todoIterface) {
        return await this.todoRepository.save(todo)
    }

    async delete(id: number) {
        const todo = await this.todoRepository.findOne(id)
        return this.todoRepository.delete(todo)
    }

    async update(id: number, completed: boolean) {
        let todo = await this.todoRepository.findOne(id)
        todo.completed = Boolean(completed)

        console.log(todo)

        return this.todoRepository.save(todo)
    }
}
