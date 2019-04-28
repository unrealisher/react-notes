import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import Header from "./Header";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Header", module).add("Десктоп", () => (
  <Provider store={store}>
    <Header />
  </Provider>
));
