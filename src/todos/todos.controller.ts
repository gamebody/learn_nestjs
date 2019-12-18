import { Controller, Get, Patch, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todosService.findAll()
    }

    @Post()
    async create(@Body() CreateTodoDto: CreateTodoDto) {
        this.todosService.create(CreateTodoDto)
    }

    @Patch('id')
    update(@Param('id') id: string, @Body() UpdateTodoDto: UpdateTodoDto): string {
        console.log(`${id}: actived: ${UpdateTodoDto.actived}`)
        return '更新todos';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
