import IToolsRepository from "../IToolsRepository";
import ITool from "../../entities/interfaces/ITool";
import Tool from "../../entities/Tool";
import Tag from "../../entities/Tag";
import { sequelize } from "../../entities";
import ITag from "../../entities/interfaces/ITag";

class MysqlToolsRepository implements IToolsRepository {
  async getAll(): Promise<ITool[]> {
    const tools = await Tool.findAll({ 
      include: [Tool.associations.tags],
      attributes: ["id", "title", "link", "description"],
    });

    const _tools = tools.map((tool) => ({
      ...tool.get(),
      tags: tool.tags?.map((tag) => tag.name),
    }));

    return _tools;
  }

  async create(tool: ITool): Promise<ITool> {
    const transaction = await sequelize.transaction();

    try {
      const _tool = await Tool.create(tool, { transaction });

      if (tool.tags) {
        const _tags = tool.tags.map((v: ITag, i: number) => {
          let _tag: ITag;

          _tag = {
            ...v,
            tool_id: _tool.id,
          };

          return _tag;
        });

        await Tag.bulkCreate(_tags, { transaction });
      }
      await transaction.commit();

      return _tool;
    } catch (error) {
      await transaction.rollback();

      return error;
    }
  }
}

export default MysqlToolsRepository;
