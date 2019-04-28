import IData from "../interfaces/IData";

declare module "*.json" {
  const value: IData;
  export default value;
}
