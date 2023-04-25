import { Controller, Get } from "@nestjs/common";
import { ListCommentUseCase } from "./ListCommentUseCase";
import { Comment } from "../../entities/Comment";


@Controller("/comments")
export class ListCommentController {
  constructor(
    private createCommentUseCase: ListCommentUseCase,
  ) {}

  @Get("/")

  async handle(): Promise<Comment[]> {
    const result = await this.createCommentUseCase.execute()
    return result
  }
}