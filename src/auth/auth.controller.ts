import { Body, Controller,Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'; 


@Controller()
export class AuthController {

    constructor(
        private userService : UserService
    ){}

    @Post('register')
    async register(@Body() body){

        const hashed = await bcrypt.hash(body.password, 12);
        
        return this.userService.create({...body,password: hashed});
    }
}
