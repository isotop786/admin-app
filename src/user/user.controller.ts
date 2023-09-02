import { Body, Controller, Get, Post, UseGuards, UseInterceptors, Param, Put, Delete, Query} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './models/user.entity';
import * as bcrypt from 'bcrypt';
import { UserCreatDto } from './models/user-create.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { UserUpdateDTO } from './models/use-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ){}
    
    // getting all users
    @Get()
    async all() : Promise<User[]>{
        return await this.userService.all();
        // return await this.userService.paginate(page);
    }
    // @Get()
    // async all(@Query() page: number =1) : Promise<User[]>{
    //     return await this.userService.all();
    //     // return await this.userService.paginate(page);
    // }

    // creating a user
    @Post()
    async create(@Body() body : UserCreatDto ) : Promise<User>
    {
        const hashed_password = await bcrypt.hash("123456",12);

        return this.userService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hashed_password,
            role: {id: body.role_id }
        })
    }

    // getting a single user
    @Get(':id') 
    async get(@Param('id') id: number)
    {
        return await this.userService.findOne({id});
    }

    // updating a user record
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body : UserUpdateDTO
    )
    {
        return this.userService.update(id,{...body,role:{id:body.role_id}})
    }

    // Deleting a user
    @Delete(':id')
    async delete(@Param('id') id: number) : Promise<any>
    {
        return this.userService.deleteUser(id);
    }

}
