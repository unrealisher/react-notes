import React from "react";

import Date from "./Date";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Date", module).add("Стандарт", () => <Date created={1551780000000}/>);
