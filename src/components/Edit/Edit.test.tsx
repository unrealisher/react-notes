import React from "react";
import { shallow, mount } from "enzyme";
import { Edit } from "./Edit";

describe("Edit", () => {
  const onArchiveClick = (): void => {};
  const note = {
    id: 6,
    type: "text",
    text:
      "Реферат до 2 апреля (300 терминов, аннотация, основная, заключение, список литературы)\nПеревод 40к знаков к зачету, 40к к экзамену\nТест 1 и 2\n\nПодготовка кадров зарубежом (юнит 2)\nНаучно исследовательская работа магистранта (юнит 2)\nРоль науки (юнит 1)\n10-15 предложений минимум",
    tags: [5, 6],
    color: 1,
    size: "m",
    created: 1549189500000
  };
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <Edit
        onArchiveClick={onArchiveClick}
        note={note}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("onArchiveClick calls when first button is clicked", () => {
    const onArchiveClick = jest.fn();
    const component = mount(
      <Edit
        onArchiveClick={onArchiveClick}
        note={note}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    const button = component.find(".button").first();
    button.simulate("click");
    expect(onArchiveClick).toBeCalledWith(note.id);
  });

  it("setPatchItem calls when second button is clicked", () => {
    const setPatchItem = jest.fn();
    const component = mount(
      <Edit
        onArchiveClick={onArchiveClick}
        note={note}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    const button = component.find(".button").last();
    button.simulate("click");
    expect(setPatchItem).toBeCalledWith(note);
  });

  it("setPopup calls when second button is clicked", () => {
    const setPopup = jest.fn();
    const component = mount(
      <Edit
        onArchiveClick={onArchiveClick}
        note={note}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    const button = component.find(".button").last();
    button.simulate("click");
    expect(setPopup).toBeCalledWith(true);
  });
});
