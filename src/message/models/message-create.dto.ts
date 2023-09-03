import { IsEmail, IsNotEmpty, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class MessageCreateDTO
{
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    subject: string;

    @IsNotEmpty()
    @IsEmail()
    sender_email: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(1500)
    message_body: string;
}