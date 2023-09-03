import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './models/Order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private readonly orderRepository : Repository<Order>
    ){}

    async all() : Promise<Order[]>
    {
        return this.orderRepository.find({relations:['order_items']});
    }

    async create(data) : Promise<Order>
    {
        return this.orderRepository.save(data);
    }

    async findOne(condition): Promise<Order>
    {
        return this.orderRepository.findOne({where: condition});
    }

    async update(id: number, data) : Promise<any>
    {
        await this.orderRepository.update(id, data);
        return this.orderRepository.findOne({where: {id: id}});
    }

    async delete(id: number) : Promise<any>
    {
        await this.orderRepository.delete(id)
        return {
            "message":"Order Deleted"
        }
    }
}
