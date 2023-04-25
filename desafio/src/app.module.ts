import { Module } from '@nestjs/common';
import { CommentHttpModule } from './modules/comments/http.module';

@Module({
  imports: [
    CommentHttpModule
  ],
  providers: [
    
  ],
})
export class AppModule {}
