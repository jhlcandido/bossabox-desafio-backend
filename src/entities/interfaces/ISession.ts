import IUser from "./IUser";

interface ISession {
  authorized: boolean;
  user: IUser | null;
  token: string;
}

export default ISession;
