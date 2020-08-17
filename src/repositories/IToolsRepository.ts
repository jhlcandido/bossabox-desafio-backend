import ITool from "../entities/interfaces/ITool";

interface IToolsRepository {
  getAll(): Promise<ITool[]>;
  create(tools: ITool): Promise<ITool>;
}

export default IToolsRepository;
