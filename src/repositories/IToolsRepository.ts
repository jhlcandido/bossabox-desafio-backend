import ITool from "../entities/interfaces/ITool";

interface IToolsRepository {
  getAll({ user_id }: { user_id: number }): Promise<ITool[]>;
  create(tools: ITool): Promise<ITool>;
}

export default IToolsRepository;
