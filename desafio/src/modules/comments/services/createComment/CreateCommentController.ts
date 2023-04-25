import { Body, Controller, Post } from "@nestjs/common";
import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { CreateCommentDTO } from "../../DTO/CreateCommentDTO";


@Controller("/comments")
export class CreateCommentController {
  constructor(
    private createCommentUseCase: CreateCommentUseCase,
  ) {}

  @Post("/")

  async handle(@Body() body: CreateCommentDTO): Promise<void> {
    await this.createCommentUseCase.execute(body)
  }
}