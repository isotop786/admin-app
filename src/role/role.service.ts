import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './models/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private readonly roleRepository : Repository<Role>
    ){}

    async all() : Promise<Role[]>
    {
        return this.roleRepository.find();
    }

    async create(data) : Promise<Role>
    {
        return this.roleRepository.save(data);
    }

    async findOne(condition): Promise<Role>
    {
        return this.roleRepository.findOne({where: condition});
    }

    async update(id: number, data) : Promise<any>
    {
        await this.roleRepository.update(id, data);
        return this.roleRepository.findOne({where: {id: id}});
    }

    async delete(id: number) : Promise<any>
    {
        await this.roleRepository.delete(id)
        return {
            "message":"Role Deleted"
        }
    }
}
