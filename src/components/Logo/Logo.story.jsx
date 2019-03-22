import React from "react";

import Logo from "./Logo";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("Logo", module).add("Стандарт", () => <Logo />);
