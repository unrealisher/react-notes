import React from "react";

import Header from "./Header";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Header", module).add("Десктоп", () => <Header />);
