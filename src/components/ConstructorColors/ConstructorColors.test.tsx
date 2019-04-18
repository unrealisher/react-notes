import React from "react";
import { shallow, mount } from "enzyme";
import { ConstructorColors } from "./ConstructorColors";

describe("ConstructorColors", () => {
  const colors = [
    { id: 0, color: "#E84747" },
    { id: 1, color: "#F2994A" },
    { id: 2, color: "#F2C94C" },
    { id: 3, color: "#219653" },
    { id: 4, color: "#56CCF2" },
    { id: 5, color: "#2F80ED" },
    { id: 6, color: "#9B51E0" }
  ];
  const color = 1;
  const setColor = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <ConstructorColors colors={colors} color={color} setColor={setColor} />
    );
    expect(component).toMatchSnapshot();
  });

  it("call setColor when label is clicked", () => {
    const setColor = jest.fn();
    const component = mount(
      <ConstructorColors colors={colors} color={color} setColor={setColor} />
    );
    const label = component.find(".label");
    label.forEach(item => item.simulate("click"));
    expect(setColor.mock.calls.length).toBe(7);
  });
});
