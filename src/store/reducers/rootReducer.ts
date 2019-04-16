import IState from "../../interfaces/IState";
import { IFetchDataAction } from "../actions/fetchData";
import { actionTypes } from "../actions/actionTypes";
import { IFetchArchiveAction } from "../actions/fetchArchive";
import IData from "../../interfaces/IData";
import { ISetActiveNotesAction } from "../actions/setActiveNotes";
import { ISetArchiveNotesAction } from "../actions/setArchiveNotes";
import { ICheckItemAction } from "../actions/checkItem";
import INote from "../../interfaces/INote";
import { IFilterItemsAction } from "../actions/filterItems";
import { ISearchItemsAction } from "../actions/searchItems";
import { IArchiveItemAction } from "../actions/archiveItem";
import { IPatchNoteAction } from "../actions/patchNote";
import { IAddNoteAction } from "../actions/addNote";

const getNewNotes = (
  index: number,
  note: INote,
  array: INote[] | undefined
): INote[] => {
  if (array) {
    const indexItem = array.indexOf(note);
    if (
      note.items &&
      note.items[index] &&
      note.items[index].checked !== undefined
    ) {
      note.items[index].checked = !note.items[index].checked;
    }
    array[indexItem] = note;
    return array;
  }
  return [];
};

export const rootReducer = (
  state: IState = {
    colors: [],
    tags: [],
    notes: [],
    archive: [],
    activeNotes: true,
    filter: [],
    search: ""
  },
  /*eslint-disable*/
  action:
    | IAddNoteAction
    | IPatchNoteAction
    | IFetchDataAction
    | IFetchArchiveAction
    | ISetActiveNotesAction
    | ISetArchiveNotesAction
    | ICheckItemAction
    | IFilterItemsAction
    | ISearchItemsAction
    | IArchiveItemAction
  /*eslint-enable*/
): IState => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      const { tags, colors, notes, archive }: IData = action.payload;
      return {
        ...state,
        tags,
        colors,
        notes,
        archive,
        activeNotes: state.activeNotes
      };

    case actionTypes.FETCH_ARCHIVE:
      return { ...state, archive: action.payload };

    case actionTypes.ADD_NOTE:
      return { ...state, notes: action.payload };

    case actionTypes.PATCH_NOTE:
      return { ...state, notes: action.payload };

    case actionTypes.SET_ACTIVE_NOTES:
      return { ...state, activeNotes: true };

    case actionTypes.SET_ARCHIVE_NOTES:
      return { ...state, activeNotes: false };

    case actionTypes.CHECK_ITEM:
      const { itemIndex, note } = action.payload;
      if (state.activeNotes)
        return {
          ...state,
          notes: getNewNotes(itemIndex, note, state.notes)
        };
      else {
        return {
          ...state,
          archive: getNewNotes(itemIndex, note, state.archive)
        };
      }

    case actionTypes.FILTER_ITEMS:
      const { filter } = state;
      const newFilter = filter.slice();
      const index = newFilter.indexOf(action.payload);
      if (index !== -1) {
        newFilter.splice(index, 1);
      } else {
        newFilter.push(action.payload);
      }
      return { ...state, filter: newFilter };

    case actionTypes.SEARCH_ITEMS:
      return { ...state, search: action.payload };

    case actionTypes.ARCHIVE_ITEM:
      return { ...state, notes: action.payload };

    default:
      const sessionState = sessionStorage.getItem("state");
      if (sessionState) return JSON.parse(sessionState);
      return state;
  }
};
