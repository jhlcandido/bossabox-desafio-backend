import jwt from "jsonwebtoken";

import IUser from "../entities/interfaces/IUser";
import IUsersRepository from "../repositories/IUsersRepository";
import ISession from "../entities/interfaces/ISession";

class UsersCases {
  constructor(private usersRepository: IUsersRepository) {}

  async getUsers(): Promise<IUser[]> {
    return await this.usersRepository.getAll();
  } 

  async authorize(user: IUser): Promise<ISession> {
    const _user = await this.usersRepository.getByEmail(user.email);
 
    const token = jwt.sign(
      {
        id: _user?.id,
      },
      process.env.APP_SECRET || "",
      { expiresIn: "72h" }
    );

    return {
      authorized: !!_user,
      token,
      user: _user,
    };
  }

  async createUser(tool: IUser): Promise<IUser> {
    return await this.usersRepository.create(tool);
  }
}

export default UsersCases;
