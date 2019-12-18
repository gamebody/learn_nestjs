import { Controller, Get, Patch, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll() {
        const res = await this.todosService.findAll()
        return {
            code: 1,
            data: res,
            message: "success"
        }
    }

    @Post()
    async create(@Body() CreateTodoDto: CreateTodoDto) {
        const res = await this.todosService.create(CreateTodoDto)
        return {
            code: 1,
            data: res,
            message: '成功'
        }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() UpdateTodoDto: UpdateTodoDto) {
        try {
            await this.todosService.update(id, UpdateTodoDto.completed);
            return {
                code: 1,
                data: null,
                message: "更新成功"
            }
        } catch (error) {
            return {
                code: 2,
                data: error.message,
                message: "更新失败"
                
            }
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.todosService.delete(id)
            return {
                code: 1,
                data: null,
                message: "删除成功"
            }
        } catch (error) {
            return {
                code: 2,
                data: error.message,
                message: "删除失败"
            }
        }
    }

}
