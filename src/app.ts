let path = ".env";
if (process.env.NODE_ENV === "test") {
  path = ".test.env";
} else if (process.env.NODE_ENV === "dev") {
  path = ".dev.env";
}

require("dotenv").config({
  path,
});

console.log(`env: ${path}`);

import express, { Express } from "express";
import { router } from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json";

class AppController {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  routes() {
    this.express.use(router);
    this.express.use(function (req, res) {
      res.send(404);
    });
  }
}

export default new AppController().express;
