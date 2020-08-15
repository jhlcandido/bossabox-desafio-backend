import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { Optional } from "sequelize/types";
import { ITool } from "./interfaces/ITool";

interface IToolCreationAttributes extends Optional<ITool, "id"> {}

class Tool extends Model<ITool, IToolCreationAttributes> implements ITool {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public user_id!: number;
}

Tool.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "tools", // We need to choose the model name
  }
);

export default Tool;
