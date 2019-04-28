import React from "react";
import { shallow, mount } from "enzyme";
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

  it("onTypeChange calls when button is clicked", () => {
    const onTypeChange = jest.fn();
    const component = mount(
      <TypeList
        type={type}
        name={name}
        onTypeChange={onTypeChange}
        items={items}
      />
    );
    const radio = component.find(".radio");
    radio.forEach(item => item.simulate("change"));
    expect(onTypeChange).toBeCalledTimes(3);
  });
});
