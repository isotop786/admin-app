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

    async paginate(page :any = 1) : Promise<any>
    {
        const take = 1;
        console.log(page.page)

        try{
            const [users, total] = await this.userRepository.findAndCount({
                take,
                skip: (page.page - 1) * take
                // skip: (parseInt(page) -1 )
                // skip: 1
            })

            return {
                data: users,
                meta:{
                    total,
                    page,
                    last_page: Math.ceil(total / take)
                }
            }

        }catch(err)
        {
            console.log(err)
        }

     

       
    }

    async create(data) : Promise<User> {
        return this.userRepository.save(data)
    }

    async findOne(condition): Promise<User>
    {
        // return this.userRepository.findOne({where: {email}});
        return this.userRepository.findOne({where: condition});
    }

    async update(id: number, data) : Promise<any>
    {
        await this.userRepository.update(id, data);
        return this.userRepository.findOne({where: {id: id}});
    }

    async deleteUser(id: number) : Promise<any>
    {
        await this.userRepository.delete(id)
        return {
            "message":"User Deleted"
        }
    }
}
