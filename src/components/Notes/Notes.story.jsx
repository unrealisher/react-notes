import React from "react";

import Notes from "./Notes";

import { storiesOf } from "@storybook/react";

import data from "./../../data/data";

import "./../../index.scss";

storiesOf("Notes", module).add("Стандарт", () => <Notes data={data} />);
