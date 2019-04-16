import { actionTypes } from "./actionTypes";
import INote from "../../interfaces/INote";
import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";
import Data from "../../services/Data";

export interface IArchiveItemAction {
  type: actionTypes.ARCHIVE_ITEM;
  payload: INote[];
}

export const archiveItem: ActionCreator<
  ThunkAction<void, IState, null, AnyAction>
> = (id: number): ThunkAction<void, IState, null, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IState, null, AnyAction>
  ): Promise<void> => {
    const result = await Data.deleteNote(id);
    dispatch({
      type: actionTypes.ARCHIVE_ITEM,
      payload: result
    });
  };
};
