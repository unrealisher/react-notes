import { IFetchNotesAction } from "../actions/fetchNotes";
import IState from "../../interfaces/IState";
import { IFetchDataAction } from "../actions/fetchData";
import { actionTypes } from "../actions/actionTypes";
import { IFetchArchiveAction } from "../actions/fetchArchive";
import IData from "../../interfaces/IData";
import { ISetActiveNotesAction } from "../actions/setActiveNotes";
import { ISetArchiveNotesAction } from "../actions/setArchiveNotes";

export const rootReducer = (
  state: IState = {
    colors: [],
    tags: [],
    notes: [],
    archive: [],
    activeNotes: true
  },
  /*eslint-disable*/
  action:
    | IFetchNotesAction
    | IFetchDataAction
    | IFetchArchiveAction
    | ISetActiveNotesAction
    | ISetArchiveNotesAction
  /*eslint-enable*/
): IState => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      const { tags, colors, notes, archive }: IData = action.payload;
      return { tags, colors, notes, archive, activeNotes: state.activeNotes };

    case actionTypes.FETCH_NOTES:
      return { ...state, notes: action.payload };

    case actionTypes.FETCH_ARCHIVE:
      return { ...state, archive: action.payload };

    case actionTypes.SET_ACTIVE_NOTES:
      return { ...state, activeNotes: true };

    case actionTypes.SET_ARCHIVE_NOTES:
      return { ...state, activeNotes: false };

    default:
      return state;
  }
};
