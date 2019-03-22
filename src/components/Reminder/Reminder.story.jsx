import React from "react";

import Reminder from "./Reminder";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Reminder", module).add("Стандарт", () => (
  <Reminder reminder={1552640400000} />
));
