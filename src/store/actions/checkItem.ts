import { actionTypes } from "./actionTypes";
import INote from "../../interfaces/INote";

interface IPayload {
  itemIndex: number;
  note: INote;
}

export interface ICheckItemAction {
  type: actionTypes.CHECK_ITEM;
  payload: IPayload;
}

export const setCheckItem = (
  itemIndex: number,
  note: INote
): ICheckItemAction => {
  return {
    type: actionTypes.CHECK_ITEM,
    payload: {
      itemIndex,
      note
    }
  };
};
