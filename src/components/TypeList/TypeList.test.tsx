import React from "react";
import { shallow } from "enzyme";
import { TypeList } from "./TypeList";

describe("TypeList", () => {
  const type = "text";
  const name = "text";
  const onTypeChange = (): void => {};
  const items = [
    { text: "Список", value: "list" },
    { text: "Текст", value: "text" },
    { text: "Картинка", value: "image" }
  ];
  it("correct render", () => {
    const component = shallow(
      <TypeList
        type={type}
        name={name}
        onTypeChange={onTypeChange}
        items={items}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
