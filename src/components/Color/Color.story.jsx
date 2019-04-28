import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import Color from "./Color";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Color", module).add("Красный", () => (
  <Provider store={store}>
    <Color color={{ id: 1, color: "red" }} />
  </Provider>
));
