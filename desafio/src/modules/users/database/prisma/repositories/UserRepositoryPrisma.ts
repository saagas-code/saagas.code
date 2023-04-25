
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/instances/prisma.service';
import { IUsersRepository } from '../../interface/IUsersRepository';
import { CreateUserDTO } from 'src/modules/users/DTO/CreateUserDTO';
import { User } from 'src/modules/users/entities/User';


@Injectable()
export class UserRepositoryPrisma implements IUsersRepository {
  constructor(
    private prisma: PrismaService
  ) {}
  
  async create(data: CreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data
    })
  }

  async list(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return users
  }
  
  
}