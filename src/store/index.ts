import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  sessionStorage.setItem("state", JSON.stringify(store.getState()));
});

export default store;
