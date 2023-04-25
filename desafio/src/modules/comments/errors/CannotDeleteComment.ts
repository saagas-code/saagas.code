
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class CannotDeleteComment extends HttpException {
  constructor() {
    super ('Você não tem permissão para deletar este comentário', HttpStatus.UNAUTHORIZED)
  }
}