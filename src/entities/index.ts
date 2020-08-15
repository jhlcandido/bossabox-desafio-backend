"use strict";

const fs = require("fs");
const path = require("path");
import { Sequelize, Model } from "sequelize";
const basename = path.basename(__filename);
const config = require("../config/database");

export interface IConnection {
  sequelize: Sequelize;
}

class Connection implements IConnection {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
  }
}

const { sequelize } = new Connection();

export { sequelize };
