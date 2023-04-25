import { Injectable } from "@nestjs/common";
import { ICommentsRepository } from "../../database/interfaces/ICommentsRepository";
import { Comment } from "../../entities/Comment";




@Injectable()
export class ListCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository
  ) {}

  async execute(): Promise<Comment[]> {
    const comments = await this.commentRepository.list()
    return comments
  }
}