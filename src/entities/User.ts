import IUser from "./interfaces/IUser";

import {
  Model,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";

import { sequelize } from "./index";
import Tool from "./Tool";

interface IUserCreationAttributes extends Optional<IUser, "id"> {}

class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public email!: string;
  public password!: string;

  public tools?: Tool[];

  public getTools!: HasManyGetAssociationsMixin<Tool>; // Note the null assertions!
  public addTool!: HasManyAddAssociationMixin<Tool, number>;
  public hasTool!: HasManyHasAssociationMixin<Tool, number>;
  public countTools!: HasManyCountAssociationsMixin;
  public createTool!: HasManyCreateAssociationMixin<Tool>;

  public static associations: {
    projects: Association<User, Tool>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "campo deve ser um e-mail válido",
        },
        notNull: {
          msg: "campo não pode ser null",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
      },
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
User.hasMany(Tool, {
  sourceKey: "id",
  foreignKey: "user_id",
  as: "tools", // this determines the name in `associations`!
});

export default User;
