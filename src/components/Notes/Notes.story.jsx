import React from "react";

import Notes from "./Notes";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Notes", module).add("Стандарт", () => <Notes />);
