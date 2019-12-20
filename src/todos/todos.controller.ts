import { Controller, Get, Patch, Post, Body, Delete, Param, Type } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { ApiUseTags, ApiResponse, ApiOperation, ApiOkResponse, ApiImplicitParam } from '@nestjs/swagger';
import { Todo } from './todo.entity';

@ApiUseTags ('todos')
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {}
    
    @ApiOperation({ title: "获取全部的Todo" })
    @ApiOkResponse({ description: '获取全部的todo2', type: [Todo]})
    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todosService.findAll()
    }

    @ApiOperation({ title: "创建todo1" })
    @ApiOkResponse({ description: '创建成功的todo的返回类型', type: Todo})
    @Post()
    async create(@Body() CreateTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todosService.create(CreateTodoDto)
    }

    @ApiOperation({ title: "更新todo" })
    @ApiOkResponse({ description: '更新的todo的返回类型', type: Todo})
    @Patch(':id')
    async update(@Param('id') id: number, @Body() UpdateTodoDto: UpdateTodoDto) {
        return this.todosService.update(id, UpdateTodoDto.completed);
    }

    @ApiOperation({ title: "删除todo" })
    @ApiOkResponse({ description: '删除的todo的返回类型', type: Todo})
    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.todosService.delete(id)
    }
}
