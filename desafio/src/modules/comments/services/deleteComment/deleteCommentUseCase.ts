import { Injectable } from "@nestjs/common";
import { ICommentsRepository } from "../../database/interfaces/ICommentsRepository";
import { Comment } from "../../entities/Comment";
import { CommentNotExists } from "../../errors/CommentNotExists";
import { IUsersRepository } from "src/modules/users/database/interface/IUsersRepository";
import { UserNotFound } from "../../errors/UserNotFound";
import { CannotDeleteComment } from "../../errors/CannotDeleteComment";

interface IPayload {
  id: string,
  email: string
}


@Injectable()
export class DeleteCommentUseCase {
  constructor(
    private commentRepository: ICommentsRepository,
    private userRepository: IUsersRepository
  ) {}

  async execute(params: IPayload): Promise<void> {
    
    const comment = await this.commentRepository.findById(params.id)
    if(!comment) {
      throw new CommentNotExists()
    }

    const user = await this.userRepository.findByEmail(params.email)
    if(!user) {
      throw new UserNotFound()
    }

    if(comment.user_id !== user.id) {
      throw new CannotDeleteComment()
    }

    await this.commentRepository.delete(comment.id)

  }
}