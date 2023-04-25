
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/instances/prisma.service';
import { CreateCommentDTO } from 'src/modules/comments/DTO/CreateCommentDTO';
import { ICommentsRepository } from '../../interfaces/ICommentsRepository';
import { Comment } from 'src/modules/comments/entities/Comment';


@Injectable()
export class CommentRepositoryPrisma implements ICommentsRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(data: CreateCommentDTO, user_id: string): Promise<void> {
    const user = await this.prisma.comment.create({
      data: {
        title: data.title,
        body: data.body,
        user_id
      }
    })
  }
  
  async list(): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany()
    return comments
  }
  update(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}