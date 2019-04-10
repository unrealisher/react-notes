import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import Search from "./Search";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Search", module).add("Стандарт", () => (
  <Provider store={store}>
    <Search />
  </Provider>
));
