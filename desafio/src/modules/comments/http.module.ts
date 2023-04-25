
import { Module } from '@nestjs/common';
import { CreateCommentController } from './services/CreateCommentController';
import { CreateCommentUseCase } from './services/CreateCommentUseCase';
import { UserDatabaseModule } from '../users/database.module';
import { CommentDatabaseModule } from './database.module';


@Module({
  imports: [
    CommentDatabaseModule,
    UserDatabaseModule
  ],
  controllers: [
    CreateCommentController,

  ],
  providers: [
    CreateCommentUseCase,
  ],
  exports: []
  
})

export class CommentHttpModule {}