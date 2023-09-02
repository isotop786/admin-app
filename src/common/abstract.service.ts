import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService {
    protected  constructor(
        protected readonly repository: Repository<any>
    ){}

    async all(): Promise<any[]>
    {
        return this.repository.find();
    }

    async create(data): Promise<any>
    {
        return this.repository.save(data)
    }

    async findOne(condition) : Promise<any>
    {
        return this.repository.findOne({where: condition})
    }

    async update(id: number, data) : Promise<any>
    {
        await this.repository.update(id, data);
        return this.repository.findOne({where: {id: id}});
    }  

    async (id: number): Promise<any>
    {
         return this.repository.delete(id)
    }

}
