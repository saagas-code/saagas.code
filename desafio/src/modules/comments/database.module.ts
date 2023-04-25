import { Module } from "@nestjs/common";
import { PrismaService } from "src/instances/prisma.service";
import { ICommentsRepository } from "./database/interfaces/ICommentsRepository";
import { CommentRepositoryPrisma } from "./database/prisma/repositories/CommentRepositoryPrisma";


@Module({
  providers: [
    PrismaService,
    {
      provide: ICommentsRepository,
      useClass: CommentRepositoryPrisma
    },
  ],

  exports: [ICommentsRepository]
})

export class CommentDatabaseModule {}