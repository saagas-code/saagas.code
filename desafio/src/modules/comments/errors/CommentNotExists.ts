
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class CommentNotExists extends HttpException {
  constructor() {
    super ('Comentário inexistente', HttpStatus.NOT_FOUND)
  }
}