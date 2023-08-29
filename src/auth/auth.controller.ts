import { Body, Controller,Post, BadRequestException, NotFoundException,Res }
 from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'; 
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import {Response} from 'express'


@Controller()
export class AuthController {

    constructor(
        private userService : UserService,
        private jwtService : JwtService

    ){}

    @Post('register')
    async register(@Body() body:RegisterDto){

        if(body.password !== body.password_confirm)
        {
            throw new BadRequestException('Passwords did not matched')
        }
        else{
            const hashed = await bcrypt.hash(body.password, 12);
            
            return this.userService.create({...body,password: hashed});
        }

    } 

    @Post('login')
    async login(
         @Body('email') email: string,
         @Body('password') password: string,
         @Res({ passthrough: true}) response : Response
    )
    {
        const user = await this.userService.findOne(email);
        if(!user)
        {
            throw new NotFoundException("User not found.")
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException("Incorrect password")
        }

        const payload = {sub: user.id, email: user.email, username: user.first_name+"_"+user.last_name}
        const jwt = await this.jwtService.signAsync(payload)
        response.cookie('jwt',jwt,{httpOnly:true})


        // return {
        //     token: await this.jwtService.signAsync(payload)
        // }
        return user;
    }
}
