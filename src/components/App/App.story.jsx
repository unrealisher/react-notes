import React from "react";

import App from "./App";

import { storiesOf } from "@storybook/react";

storiesOf("Hello world", module).add("Стандарт", () => (
  <App text="hello" num={5} />
));
