import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import { User } from './models/user.entity';
import {Repository} from "typeorm"


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async all(){
        return this.userRepository.find();
    }

    async create(data) : Promise<User> {
        return this.userRepository.save(data)
    }

    async findOne(email): Promise<User>
    {
        return this.userRepository.findOne({where: {email}});
    }
}
