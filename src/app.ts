let path = ".env";
if (process.env.NODE_ENV === "test") {
  path = ".test.env";
} else if (process.env.NODE_ENV === "dev") {
  path = ".dev.env";
}

require("dotenv").config({
  path,
});

import express from "express";
import { router } from "./routes";
import cors from "cors";

class AppController {
  express: any;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(router);
  }
}

export default new AppController().express;
