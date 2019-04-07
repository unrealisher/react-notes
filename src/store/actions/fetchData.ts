import { actionTypes } from "./actionTypes";
import IData from "../../interfaces/IData";

export interface IFetchDataAction {
  type: actionTypes.FETCH_DATA;
  payload: IData;
}

export const fetchData = (data: IData): IFetchDataAction => {
  return {
    type: actionTypes.FETCH_DATA,
    payload: data
  };
};
