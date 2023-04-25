import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";


export abstract class IUsersRepository {
  abstract create(data: CreateUserDTO): Promise<User>;
  abstract list(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User>
}