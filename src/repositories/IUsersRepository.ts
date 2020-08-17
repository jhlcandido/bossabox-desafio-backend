import IUser from "../entities/interfaces/IUser";
import ISession from "../entities/interfaces/ISession";

interface IUsersRepository {
  getAll(): Promise<IUser[]>;
  create(tools: IUser): Promise<IUser>;
  getByEmail(email: string): Promise<IUser | null>;
}

export default IUsersRepository;
