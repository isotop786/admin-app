import { Body, Controller,Post, Get, BadRequestException, NotFoundException,Res,
    Req, UseInterceptors, ClassSerializerInterceptor, UseGuards }
 from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'; 
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import {Response,Request, response} from 'express'
import { AuthGuard } from './auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
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
            
            return this.userService.create({...body,password: hashed, role: {id: 1}});
        }

    } 

    // @UseGuards(NonAuthGuard)
    @Post('login')
    async login(
         @Body('email') email: string,
         @Body('password') password: string,
         @Res({ passthrough: true}) response : Response
    ) 
    {
        const user = await this.userService.findOne({email});
        if(!user)
        {
            throw new NotFoundException("User not found.")
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException("Incorrect password")
        }

        const payload = {id: user.id, email: user.email, first_name: user.first_name, last_name:user.last_name}
        const jwt = await this.jwtService.signAsync(payload)
        response.cookie('jwt',jwt,{httpOnly:true})


        // return {
        //     token: await this.jwtService.signAsync(payload)
        // }
        return user;
    }

    @UseGuards(AuthGuard)
    @Get('user')
    async user(@Req() request: Request)
    {
        const cookie = request.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(cookie);

        return this.userService.findOne({id: data.id})
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response)
    {
        response.clearCookie('jwt');

        return {
            message: 'Logout success!'
        }
    }
}
