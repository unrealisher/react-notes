import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Header", () => {
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(<Header setPopup={setPopup} />);
    expect(component).toMatchSnapshot();
  });
});
