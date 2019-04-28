import INote from "../../interfaces/INote";

import { actionTypes } from "./actionTypes";
import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";
import Data from "../../services/Data";

export interface IAddNoteAction {
  type: actionTypes.ADD_NOTE;
  payload: INote[];
}

export const addNote: ActionCreator<
  ThunkAction<void, IState, null, AnyAction>
> = (note: INote): ThunkAction<void, IState, null, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IState, null, AnyAction>
  ): Promise<void> => {
    const result = await Data.addNote(note);
    dispatch({
      type: actionTypes.ADD_NOTE,
      payload: result
    });
  };
};
