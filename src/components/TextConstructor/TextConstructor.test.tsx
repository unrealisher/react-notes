import React from "react";
import { shallow } from "enzyme";
import { TextConstructor } from "./TextConstructor";

describe("TextConstructor", () => {
  const text = "Hello World!";
  const setText = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <TextConstructor text={text} setText={setText} />
    );
    expect(component).toMatchSnapshot();
  });
});
