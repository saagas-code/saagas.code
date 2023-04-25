
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class UserNotFound extends HttpException {
  constructor() {
    super ('Usuário não encontrado', HttpStatus.NOT_FOUND)
  }
}