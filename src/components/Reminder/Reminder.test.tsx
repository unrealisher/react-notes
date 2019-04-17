import React from "react";
import { shallow } from "enzyme";
import { Reminder } from "./Reminder";

describe("Reminder", () => {
  const reminder = 100;
  it("correct render", () => {
    const component = shallow(<Reminder reminder={reminder} />);
    expect(component).toMatchSnapshot();
  });
});
