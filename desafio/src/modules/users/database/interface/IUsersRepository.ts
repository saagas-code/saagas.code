import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";


export abstract class IUsersRepository {
  abstract create(data: CreateUserDTO): Promise<void>;
  abstract list(): Promise<User[]>;
}