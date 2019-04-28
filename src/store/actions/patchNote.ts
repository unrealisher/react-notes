import INote from "../../interfaces/INote";

import { actionTypes } from "./actionTypes";
import { ActionCreator, AnyAction } from "redux";
import IState from "../../interfaces/IState";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import Data from "../../services/Data";

export interface IPatchNoteAction {
  type: actionTypes.PATCH_NOTE;
  payload: INote[];
}

export const patchNote: ActionCreator<
  ThunkAction<void, IState, null, AnyAction>
> = (note: INote): ThunkAction<void, IState, null, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IState, null, AnyAction>
  ): Promise<void> => {
    const result = await Data.patchNote(note);
    dispatch({
      type: actionTypes.PATCH_NOTE,
      payload: result
    });
  };
};
