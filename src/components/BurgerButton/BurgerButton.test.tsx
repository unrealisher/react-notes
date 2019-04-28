import React from "react";
import { shallow } from "enzyme";
import { BurgerButton } from "./BurgerButton";

describe("BurgerButton", () => {
  it("correct render", () => {
    const component = shallow(<BurgerButton />);
    expect(component).toMatchSnapshot();
  });
});
