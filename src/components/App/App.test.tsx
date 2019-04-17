import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("App", () => {
  it("correct render", () => {
    const component = shallow(<App onFetchData={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
