import { actionTypes } from "./actionTypes";

export interface ISetArchiveNotesAction {
  type: actionTypes.SET_ARCHIVE_NOTES;
}

export const setArchiveNotes = (): ISetArchiveNotesAction => {
  return {
    type: actionTypes.SET_ARCHIVE_NOTES
  };
};
