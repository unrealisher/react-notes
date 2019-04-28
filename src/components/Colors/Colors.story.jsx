import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import Colors from "./Colors";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Colors", module).add("Стандарт", () => (
  <Provider store={store}>
    <Colors />
  </Provider>
));
