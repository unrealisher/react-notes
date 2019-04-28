import React from "react";
import { shallow } from "enzyme";
import { Date } from "./Date";

describe("Date", () => {
  const created = 100;
  it("correct render", () => {
    const component = shallow(<Date created={created} />);
    expect(component).toMatchSnapshot();
  });
});
