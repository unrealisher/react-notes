import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import App from "./App";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("App", module).add("Стандарт", () => (
  <Provider store={store}>
    <App />
  </Provider>
));
