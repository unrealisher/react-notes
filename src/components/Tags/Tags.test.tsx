import React from "react";
import { shallow } from "enzyme";
import { Tags } from "./Tags";

describe("Tags", () => {
  const tags = ["Покупки", "Работа", "ШРИ"];
  it("correct render", () => {
    const component = shallow(<Tags tags={tags} />);
    expect(component).toMatchSnapshot();
  });
});
