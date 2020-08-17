import { Request, Response } from "express";
import ITool from "../entities/interfaces/ITool";
import ToolsCases from "../useCases/toolsCases";

class ToolsController {
  constructor(private toolsCases: ToolsCases) {}

  async index(req: Request, res: Response) {
    try {
      const tools = await this.toolsCases.getTools();

      return res.status(200).json(tools);
    } catch (error) {
      return res.status(500).json({ message: "error: " + error.message });
    }
  }

  async post(req: Request, res: Response) {
    try {
      const tool: ITool = { ...req.body };

      if (req.body.tags) {
        tool.tags = req.body.tags.map((v: string) => ({ name: v }));
      }

      const _tool = await this.toolsCases.createTool(tool);

      return res.status(201).json({ ...req.body, id: _tool.id });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default ToolsController;
