import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './models/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageEntity) private readonly messageRepository: Repository<MessageEntity>
    ){}

    async all() : Promise<MessageEntity[]>
    {
        return this.messageRepository.find();
    }

    async create(data) : Promise<MessageEntity>
    {
        return this.messageRepository.save(data)
    }

    async findOne(condition) : Promise<MessageEntity>
    {
        return this.messageRepository.findOne({where:condition})
    }

    async delete(id: number)
    {
         this.messageRepository.delete(id)
         return{
            "message": "Message deleted"
         }
    }
}
