import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('messages')
export class MessageEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject: string;
    
    @Column()
    sender_email: string;

    @Column()
    message_body: string;

}