import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageCreateDTO } from './models/message-create.dto';
import { AuthGuard } from '../auth/auth.guard';

// @UseGuards(AuthGuard)
@Controller('messages')
export class MessageController {
    constructor(
        private messageService : MessageService
    ){}

    @Get()
    async all(){
        return await this.messageService.all();
    }

    @Post()
    async create(@Body() body: MessageCreateDTO)
    {
        return await this.messageService.create(body)
    }

    @Get(':id')
    async findOne(@Param('id') id: number)
    {
        return await this.messageService.findOne({id})
    }

    @Delete(':id')
    async delete(id:number)
    {
        return await this.messageService.delete(id)
    }


}
