import React from "react";
import { Provider } from "react-redux";
import store from "./../../store/index";

import TagsList from "./TagsList";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("TagsList", module).add("стандарт", () => (
  <Provider store={store}>
    <TagsList />
  </Provider>
));
