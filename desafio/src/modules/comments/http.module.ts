import { DeleteCommentUseCase } from './services/deleteComment/deleteCommentUseCase';

import { Module } from '@nestjs/common';

import { UserDatabaseModule } from '../users/database.module';
import { CommentDatabaseModule } from './database.module';
import { CreateCommentController } from './services/createComment/CreateCommentController';
import { CreateCommentUseCase } from './services/createComment/CreateCommentUseCase';
import { ListCommentController } from './services/listComment/ListCommentController';
import { ListCommentUseCase } from './services/listComment/ListCommentUseCase';
import { DeleteCommentController } from './services/deleteComment/deleteCommentController';


@Module({
  imports: [
    CommentDatabaseModule,
    UserDatabaseModule
  ],
  controllers: [
    CreateCommentController,
    ListCommentController,
    DeleteCommentController,

  ],
  providers: [
    CreateCommentUseCase,
    ListCommentUseCase,
    DeleteCommentUseCase
  ],
  exports: []
  
})

export class CommentHttpModule {}