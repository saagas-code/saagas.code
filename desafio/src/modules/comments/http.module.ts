
import { Module } from '@nestjs/common';
import { CreateCommentController } from './services/CreateCommentController';
import { CreateCommentUseCase } from './services/CreateCommentUseCase';


@Module({
  imports: [],
  controllers: [
    CreateCommentController,

  ],
  providers: [
    CreateCommentUseCase,
  ],
  exports: []
  
})

export class CommentHttpModule {}