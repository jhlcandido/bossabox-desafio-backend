import SessionController from "./SessionController";
import ToolsController from "./ToolsController";
import { UsersController } from "./UsersController";
import { usersCases, toolsCases } from "../useCases";

const sessionController = new SessionController(usersCases);
const toolsController = new ToolsController(toolsCases);
const usersController = new UsersController(usersCases);

export { sessionController, toolsController, usersController };
