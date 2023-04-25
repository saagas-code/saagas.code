import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteCommentUseCase } from "./deleteCommentUseCase";

interface IPayload {
  id: string
  email: string
}

@Controller("/comments")
export class DeleteCommentController {
  constructor(
    private deleteCommentUseCase: DeleteCommentUseCase,
  ) {}

  @Delete("/:id/:email")
  async handle(@Param() param: IPayload): Promise<void> {
    await this.deleteCommentUseCase.execute(param)
  }
}