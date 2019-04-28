import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import NoteConstructor from "./NoteConstructor";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("NoteConstructor", module).add("стандарт", () => (
  <Provider store={store}>
    <NoteConstructor />
  </Provider>
));
