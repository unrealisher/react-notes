import { actionTypes } from "./actionTypes";
import INote from "../../interfaces/INote";

export interface IArchiveItemAction {
  type: actionTypes.ARCHIVE_ITEM;
  payload: INote;
}

export const archiveItem = (note: INote): IArchiveItemAction => {
  return {
    type: actionTypes.ARCHIVE_ITEM,
    payload: note
  };
};
