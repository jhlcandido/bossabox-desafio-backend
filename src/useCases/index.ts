import MysqlToolsRepository from "../repositories/implementations/MysqlToolsRepository";
import { MysqlUsersRepository } from "../repositories/implementations/MysqlUsersRepository";

import ToolsCases from "./toolsCases";
import UsersCases from "./usersCases";

const toolsRepository = new MysqlToolsRepository();
const toolsCases = new ToolsCases(toolsRepository);

const usersRepository = new MysqlUsersRepository();
const usersCases = new UsersCases(usersRepository);

export { toolsCases, usersCases };
