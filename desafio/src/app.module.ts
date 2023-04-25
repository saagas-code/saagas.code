import { Module } from '@nestjs/common';
import { CommentHttpModule } from './modules/comments/http.module';
import { UserDatabaseModule } from './modules/users/database.module';

@Module({
  imports: [
    CommentHttpModule,

    
    UserDatabaseModule
  ],
  providers: [
    
  ],
})
export class AppModule {}
