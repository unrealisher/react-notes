import React from "react";

import Search from "./Search";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Search", module).add("Стандарт", () => <Search />);
