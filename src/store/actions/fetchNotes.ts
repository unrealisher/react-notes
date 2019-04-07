import INote from "./../../interfaces/INote";

import { actionTypes } from "./actionTypes";

export interface IFetchNotesAction {
  type: actionTypes.FETCH_NOTES;
  payload: INote[];
}

export const fetchNotes = (notes: INote[]): IFetchNotesAction => {
  return {
    type: actionTypes.FETCH_NOTES,
    payload: notes
  };
};
