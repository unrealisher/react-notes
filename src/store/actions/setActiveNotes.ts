import { actionTypes } from "./actionTypes";

export interface ISetActiveNotesAction {
  type: actionTypes.SET_ACTIVE_NOTES;
}

export const fetchNotes = (): ISetActiveNotesAction => {
  return {
    type: actionTypes.SET_ACTIVE_NOTES
  };
};
