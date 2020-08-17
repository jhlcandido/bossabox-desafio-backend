import { Request, Response } from "express";
import IUser from "../entities/interfaces/IUser";
import UsersCases from "../useCases/usersCases";

export class UsersController {
  constructor(private usersCases: UsersCases) {}

  async index(req: Request, res: Response) {
    try {
      const users = await this.usersCases.getUsers();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "error: " + error.message });
    }
  }

  async post(req: Request, res: Response) {
    try {
      const _user: IUser = req.body;
      const user = await this.usersCases.createUser(_user);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
