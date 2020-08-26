import express, { Request, Response } from "express";
import {
  toolsController,
  usersController,
  sessionController,
} from "./controllers";
import session from "./middleware/session";

const router = express.Router();

// router.get("/", (req: Request, res: Response) =>
//   res.status(200).send("not found") 
// );

router.post("/authorize", (req: Request, res: Response) =>
  sessionController.post(req, res)
);

router.get("/users", session, (req: Request, res: Response) =>
  usersController.index(req, res)
);
router.post("/users", (req: Request, res: Response) =>
  usersController.post(req, res)
);

router.use(session);

router.get("/tools", (req: Request, res: Response) =>
  toolsController.index(req, res)
);
router.post("/tools", (req: Request, res: Response) =>
  toolsController.post(req, res)
);

export { router };
