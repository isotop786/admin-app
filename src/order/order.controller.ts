import { Controller, Get,Post, Delete, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './models/Order.entity';
import { AuthGuard } from '../auth/auth.guard';

// @UseGuards(AuthGuard)
@Controller('orders')
export class OrderController {
    constructor(
        private orderServices : OrderService
    ){}

    @Get()
    async all(): Promise<Order[]>
    {
        return await this.orderServices.all()
    }
}
