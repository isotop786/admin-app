import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './models/message.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([MessageEntity])
  ],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
