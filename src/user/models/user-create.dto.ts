import {IsNotEmpty, IsEmail,MinLength,IsAlpha,IsAlphanumeric} from 'class-validator';

export class UserCreatDto{
    @IsNotEmpty()
    first_name :string;
    
    @IsNotEmpty()
    last_name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    // @IsNotEmpty()
    role_id: number;
}