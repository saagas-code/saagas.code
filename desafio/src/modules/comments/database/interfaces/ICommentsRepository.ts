import { CreateCommentDTO } from "../../DTO/CreateCommentDTO";
import { Comment } from "../../entities/Comment";


export abstract class ICommentsRepository {
  abstract create(data: CreateCommentDTO, user_id: string): Promise<void>;
  abstract list(): Promise<Comment[]>
  abstract findById(id: string): Promise<Comment>
  abstract update(): Promise<void>
  abstract delete(id: string): Promise<void>
}