import { Injectable } from "@nestjs/common";
import { CreateCommentDTO } from "../DTO/CreateCommentDTO";



@Injectable()
export class CreateCommentUseCase {
  constructor(
    
  ) {}

  async execute({name, email, password}: CreateCommentDTO): Promise<void> {
    console.log("testeeee")
  }
}