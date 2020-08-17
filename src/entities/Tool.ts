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

import ITool from "./interfaces/ITool";
import Tag from "./Tag";

interface IToolCreationAttributes extends Optional<ITool, "id"> {}

class Tool extends Model<ITool, IToolCreationAttributes> implements ITool {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
  public link!: string;
  public description!: string;
  public user_id!: number;

  public tags?: Tag[];

  public getTags!: HasManyGetAssociationsMixin<Tag>; // Note the null assertions!
  public addTag!: HasManyAddAssociationMixin<Tag, number>;
  public hasTag!: HasManyHasAssociationMixin<Tag, number>;
  public countTags!: HasManyCountAssociationsMixin;
  public createTag!: HasManyCreateAssociationMixin<Tag>;

  public static associations: {
    projects: Association<Tool, Tag>;
  };
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
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
      },
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "campo não pode ser null",
        },
        isUrl: {
          msg: "campo deve ser uma url válida",
        },
      },
    },
    description: {
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
    modelName: "tools", // We need to choose the model name
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
Tool.hasMany(Tag, {
  sourceKey: "id",
  foreignKey: "tool_id",
});

export default Tool;
