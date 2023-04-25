import { Module } from '@nestjs/common';
import { CommentHttpModule } from './modules/comments/http.module';
import { UserDatabaseModule } from './modules/users/database.module';
import { PrismaClient } from '@prisma/client';
import { CommentDatabaseModule } from './modules/comments/database.module';

@Module({
  imports: [
    CommentDatabaseModule,
    CommentHttpModule,

    
    UserDatabaseModule
  ],
  providers: [
    {
      provide: PrismaClient,
      useFactory: () => {
        const prisma = new PrismaClient({
          log: ["query"],
        })
        prisma.$connect();
        return prisma;
      }
    },
  ],
})
export class AppModule {}
