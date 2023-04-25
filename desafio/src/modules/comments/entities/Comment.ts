import { User } from "src/modules/users/entities/User"


export class Comment {
  id: string
  title: string
  body: string
  user?: User
  user_id: string
  created_at: Date
}