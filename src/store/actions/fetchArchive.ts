import INote from "./../../interfaces/INote";

import { actionTypes } from "./actionTypes";
import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";
import Data from "../../services/Data";

export interface IFetchArchiveAction {
  type: actionTypes.FETCH_ARCHIVE;
  payload: INote[];
}

export const fetchArchive: ActionCreator<
  ThunkAction<void, IState, null, AnyAction>
> = (): ThunkAction<void, IState, null, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IState, null, AnyAction>
  ): Promise<void> => {
    const result = await Data.getArchive();
    dispatch({
      type: actionTypes.FETCH_ARCHIVE,
      payload: result
    });
  };
};
