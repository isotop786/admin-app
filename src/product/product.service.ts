import { Injectable } from '@nestjs/common';
import { AbstractService } from '../common/abstract.service';
import { Repository } from 'typeorm';
import { Product } from './models/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService  {
    constructor(
        @InjectRepository(Product) private readonly productRepository : Repository <Product>
    ){}

    async all() : Promise<Product[]>
    {
        return this.productRepository.find();
    }

    async create(data) : Promise<Product>
    {
        return this.productRepository.save(data);
    }

    async findOne(condition): Promise<Product>
    {
        return this.productRepository.findOne({where: condition});
    }

    async update(id: number, data) : Promise<any>
    {
        await this.productRepository.update(id, data);
        return this.productRepository.findOne({where: {id: id}});
    }

    async delete(id: number) : Promise<any>
    {
        await this.productRepository.delete(id)
        return {
            "message":"Role Deleted"
        }
    }
}
