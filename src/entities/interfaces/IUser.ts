import ITool from "./ITool";

interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  tools?: ITool[];
}

export default IUser;
