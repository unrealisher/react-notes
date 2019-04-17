import React from "react";
import { shallow } from "enzyme";
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
});
