import { actionTypes } from "./actionTypes";

export interface ISetActiveNotesAction {
  type: actionTypes.SET_ACTIVE_NOTES;
}

export const setActiveNotes = (): ISetActiveNotesAction => {
  return {
    type: actionTypes.SET_ACTIVE_NOTES
  };
};
