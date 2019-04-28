import React from "react";
import { shallow } from "enzyme";
import { TagsList } from "./TagsList";

describe("TagsList", () => {
  const tags = [
    { id: 0, tag: "покупки" },
    { id: 1, tag: "Работа" },
    { id: 2, tag: "ШРИ" },
    { id: 3, tag: "коты" },
    { id: 4, tag: "мемы" },
    { id: 5, tag: "универ" },
    { id: 6, tag: "домашнее задание" },
    { id: 7, tag: "учеба" },
    {
      id: 8,
      tag:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    }
  ];
  const activeTags = [0, 1, 3];
  const setTags = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <TagsList tags={tags} activeTags={activeTags} setTags={setTags} />
    );
    expect(component).toMatchSnapshot();
  });
});
