import React from "react";
import { shallow } from "enzyme";
import { Color } from "./Color";

describe("Color", () => {
  const color = { id: 0, color: "#E84747" };
  it("correct render", () => {
    const component = shallow(
      <Color color={color} filter={[]} onFilterChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
