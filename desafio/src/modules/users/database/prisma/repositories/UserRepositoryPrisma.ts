
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
  
  async create(data: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data
    })
    return user
  }

  async list(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return users
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })
    return user
  }
  
  
}