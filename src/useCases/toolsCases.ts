import ITool from "../entities/interfaces/ITool";
import IToolsRepository from "../repositories/IToolsRepository";

class ToolsCases {
  constructor(private toolsRepository: IToolsRepository) {}

  async getTools({ user_id }: { user_id: number }): Promise<ITool[]> {
    return await this.toolsRepository.getAll({ user_id });
  }

  async createTool(tool: ITool): Promise<ITool> {
    return await this.toolsRepository.create(tool);
  }
}

export default ToolsCases;
