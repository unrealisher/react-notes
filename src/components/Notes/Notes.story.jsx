import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import Notes from "./Notes";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Notes", module).add("Стандарт", () => (
  <Provider store={store}>
    <Notes />
  </Provider>
));
