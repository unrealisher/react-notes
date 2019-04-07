import INote from "./../../interfaces/INote";

import { actionTypes } from "./actionTypes";

export interface IFetchArchiveAction {
  type: actionTypes.FETCH_ARCHIVE;
  payload: INote[];
}

export const fetchArchive = (notes: INote[]): IFetchArchiveAction => {
  return {
    type: actionTypes.FETCH_ARCHIVE,
    payload: notes
  };
};
