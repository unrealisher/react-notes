import IItem from "./IItem";
import IAttachment from "./IAttachment";

export default interface INote {
  id?: number;
  type?: string;
  title?: string;
  tags?: number[];
  color?: number;
  items?: IItem[];
  size?: string;
  created?: number;
  text?: string;
  attachments?: IAttachment[];
  reminder?: number;
  url?: string;
}
