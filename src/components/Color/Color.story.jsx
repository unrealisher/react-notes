import React from "react";

import Color from "./Color";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Color", module).add("Красный", () => <Color color="red" />);
