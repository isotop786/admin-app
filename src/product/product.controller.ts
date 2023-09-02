import { Controller, Get,Post,Put,Delete,Body,Param, } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateDTO } from './models/product-create.dto';
import { ProductUpdateDTO } from './models/product-update.dto';
@Controller('products')
export class ProductController {

    constructor(
        private productService: ProductService
    ){}

    @Get()
    async all()
    {
        return await this.productService.all()
    }

    @Post()
    async create(@Body() body : ProductCreateDTO)
    {
        return this.productService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number)
    {
       return await this.productService.findOne({id})
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data : ProductUpdateDTO)
    {
        return this.productService.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: number)
    {
        return this.productService.delete(id);
    }
}
