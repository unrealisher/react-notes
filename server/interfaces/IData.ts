import ITag from "./ITag";
import IColor from "./IColor";
import INote from "./INote";

export default interface IData {
  tags: ITag[];
  colors: IColor[];
  notes: INote[];
}
