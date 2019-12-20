import { Controller, Get, Patch, Post, Body, Delete, Param, Type } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Todo } from './todo.entity';

@ApiUseTags ('todos')
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}
    
    @ApiOperation({ title: "获取全部的Todo" })
    @ApiResponse({ status: 200, description: '获取全部的todo2', type: [Todo]})
    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todosService.findAll()
    }

    @ApiOperation({ title: "创建todo1" })
    @Post()
    async create(@Body() CreateTodoDto: CreateTodoDto) {
        const res = await this.todosService.create(CreateTodoDto)
        return {
            code: 1,
            data: res,
            message: '成功'
        }
    }

    @ApiOperation({ title: "更新todo" })
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

    @ApiOperation({ title: "删除todo" })
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
