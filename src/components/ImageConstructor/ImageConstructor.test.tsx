import React from "react";
import { shallow, mount } from "enzyme";
import { ImageConstructor } from "./ImageConstructor";

describe("ImageConstructor", () => {
  const image =
    "https://avatars.mds.yandex.net/get-pdb/1534889/a869b7ef-32da-41e7-8703-326ae860e67f/orig";
  const setImage = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <ImageConstructor image={image} setImage={setImage} />
    );
    expect(component).toMatchSnapshot();
  });

  it("setImage calls when reset button is clicked", () => {
    const setImage = jest.fn();
    const component = mount(
      <ImageConstructor image={image} setImage={setImage} />
    );
    const button = component.find(".reset");
    button.simulate("click");
    expect(setImage).toBeCalledWith("");
  });
});
