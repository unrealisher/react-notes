import React from "react";
import { shallow } from "enzyme";
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
});
