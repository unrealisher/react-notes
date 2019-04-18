import React from "react";
import { shallow, mount } from "enzyme";
import { ConstructorReminder } from "./ConstructorReminder";

describe("ConstructorReminder", () => {
  const reminder = 100;
  const setReminder = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <ConstructorReminder reminder={reminder} setReminder={setReminder} />
    );
    expect(component).toMatchSnapshot();
  });

  it("setReminder calls when date is changed", () => {
    const setReminder = jest.fn();
    const component = mount(
      <ConstructorReminder reminder={reminder} setReminder={setReminder} />
    );
    const input = component.find(".input");
    input.simulate("change");
    expect(setReminder).toBeCalled();
  });
});
