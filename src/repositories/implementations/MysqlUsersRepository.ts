import IUsersRepository from "../IUsersRepository";
import IUser from "../../entities/interfaces/IUser";

import User from "../../entities/User";

export class MysqlUsersRepository implements IUsersRepository {
  async getAll(): Promise<IUser[]> {
    return await User.findAll();
  }

  async create(tool: IUser): Promise<IUser> {
    return await User.create(tool);
  }

  async getByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({
      where: {
        email,
      },
    });
  }
}
