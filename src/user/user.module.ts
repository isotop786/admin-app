import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import { User } from './models/user.entity';
import { UserService } from './user.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    CommonModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
