import React from "react";

import BurgerButton from "./BurgerButton";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

storiesOf("BurgerButton", module).add("Стандарт", () => <BurgerButton />);
