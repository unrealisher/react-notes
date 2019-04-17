import React from "react";
import { shallow } from "enzyme";
import { ListConstructor } from "./ListConstructor";

describe("ListConstructor", () => {
  const items = [
    "Оливочки",
    "Макароны",
    "Яйца",
    "Сливки",
    "Хлеб",
    "Чеснок",
    "Сыр",
    "Помидорки",
    "Ветчина"
  ];
  const setItems = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <ListConstructor items={items} setItems={setItems} />
    );
    expect(component).toMatchSnapshot();
  });
});
