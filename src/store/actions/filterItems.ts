import { actionTypes } from "./actionTypes";

export interface IFilterItemsAction {
  type: actionTypes.FILTER_ITEMS;
  payload: number;
}

export const setFilterItems = (id: number): IFilterItemsAction => {
  return {
    type: actionTypes.FILTER_ITEMS,
    payload: id
  };
};
