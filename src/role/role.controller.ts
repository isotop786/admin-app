import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateRoleDTO } from './models/role-create.dto';

@UseGuards(AuthGuard)
@Controller('roles')
export class RoleController {
    constructor(
        private roleService : RoleService
    ){}

    @Get()
    async all()
    {
        return await this.roleService.all()
    }

    @Post()
    async create(@Body() body : CreateRoleDTO)
    {
        return this.roleService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number)
    {
       return await this.roleService.findOne({id})
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() name: string)
    {
        return this.roleService.update(id, name)
    }

    @Delete(':id')
    async delete(@Param('id') id: number)
    {
        return this.roleService.delete(id);
    }
}
