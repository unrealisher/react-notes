import React from "react";
import { shallow, mount } from "enzyme";
import { Color } from "./Color";

describe("Color", () => {
  const color = { id: 0, color: "#E84747" };
  it("correct render", () => {
    const component = shallow(
      <Color color={color} filter={[]} onFilterChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it("Color call onFilterChange when checkbox checked", () => {
    const onFilterChange = jest.fn();
    const component = mount(
      <Color color={color} filter={[]} onFilterChange={onFilterChange} />
    );
    const checkbox = component.find(".checkbox");
    checkbox.simulate("change");
    expect(onFilterChange).toBeCalledWith(color.id);
  });
});
