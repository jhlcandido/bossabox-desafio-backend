import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { Optional } from "sequelize/types";

import ITag from "./interfaces/ITag";

interface ITagCreationAttributes extends Optional<ITag, "id"> {}

class Tag extends Model<ITag, ITagCreationAttributes> implements ITag {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public tool_id!: number;
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    tool_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
      },
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
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "tags", // We need to choose the model name
  }
);

export default Tag;
