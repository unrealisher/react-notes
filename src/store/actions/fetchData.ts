import { actionTypes } from "./actionTypes";
import IData from "../../interfaces/IData";
import Data from "../../services/Data";
import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import IState from "../../interfaces/IState";

export interface IFetchDataAction {
  type: actionTypes.FETCH_DATA;
  payload: IData;
}

export const fetchData: ActionCreator<
  ThunkAction<void, IState, null, AnyAction>
> = (): ThunkAction<void, IState, null, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IState, null, AnyAction>
  ): Promise<void> => {
    const result = await Data.getData();
    dispatch({
      type: actionTypes.FETCH_DATA,
      payload: result
    });
  };
};
