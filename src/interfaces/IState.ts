import IData from "./IData";

export default interface IState extends IData {
  activeNotes: boolean;
  filter: number[];
  search: string;
}
