import { Injectable } from "@nestjs/common";

import { IUsersRepository } from "src/modules/users/database/interface/IUsersRepository";
import { ICommentsRepository } from "../../database/interfaces/ICommentsRepository";
import { CreateCommentDTO } from "../../DTO/CreateCommentDTO";




@Injectable()
export class CreateCommentUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private commentRepository: ICommentsRepository
  ) {}

  async execute(data: CreateCommentDTO): Promise<void> {
    
    let user = await this.userRepository.findByEmail(data.email)
    if(!user) {
      user = await this.userRepository.create({
        name: data.name,
        email: data.email,
        password: data.password
      })
    }

    await this.commentRepository.create(data, user.id)
  }
}