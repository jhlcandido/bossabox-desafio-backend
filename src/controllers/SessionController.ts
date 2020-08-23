import { Request, Response } from "express";
import UsersCases from "../useCases/usersCases";

export default class SessionController {
  constructor(private usersCases: UsersCases) {}

  async post(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email)
        return res.status(401).json({ message: "preencha o campo email" });
      if (!password)
        return res.status(401).json({ message: "preencha o campo password" });

      const _response = await this.usersCases.authorize(req.body);

      if (_response.user?.password !== password)
        return res.status(401).json({ message: "password inválido" });

      res.status(200).json(_response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
