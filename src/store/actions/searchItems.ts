import { actionTypes } from "./actionTypes";

export interface ISearchItemsAction {
  type: actionTypes.SEARCH_ITEMS;
  payload: string;
}

export const setSearchItems = (search: string): ISearchItemsAction => {
  return {
    type: actionTypes.SEARCH_ITEMS,
    payload: search
  };
};
