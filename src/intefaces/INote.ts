import IItem from "./IItem";
import IAttachment from "./IAttachment";

export default interface INote {
  id: number;
  type: "list" | "text" | "image";
  title?: string;
  tags?: number[];
  color?: number;
  items?: IItem[];
  size: "s" | "m" | "l";
  created: number;
  text?: string;
  attachments?: IAttachment[];
  reminder?: number;
  url?: string;
}
