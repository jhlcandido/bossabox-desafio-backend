import ITag from "./ITag";

interface ITool {
  id: number;
  title: string;
  link: string;
  description: string;
  user_id: number;
  tags?: any;
}

export default ITool;
