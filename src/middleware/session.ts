import jwt from "jsonwebtoken";
import { promisify } from "util";
import e, { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provider" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const secret = process.env.APP_SECRET || "";

    // const decoded = await new Promise<{ id: string }>((resolve, reject) => {
    //   jwt.verify(token, secret, function (err: any, decoded: any) {
    //     if (err) return reject(err);

    //     return resolve({ id: decoded?.id });
    //   });
    // });

    const decoded: any = await promisify(jwt.verify)(token, secret);

    req.id = decoded?.id;

    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: "Token invalid", message: err.message });
  }
};
