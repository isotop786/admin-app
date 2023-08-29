import {IsNotEmpty, IsEmail,MinLength,IsAlpha,IsAlphanumeric} from 'class-validator';


export class RegisterDto{
    @IsNotEmpty()
    @MinLength(3)
    @IsAlpha()
    first_name: string;

    @IsNotEmpty()
    @MinLength(1)
    @IsAlpha()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    password_confirm: string;
}