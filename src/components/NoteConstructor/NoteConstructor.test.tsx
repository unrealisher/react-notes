import React from "react";
import { shallow } from "enzyme";
import { NoteConstructor } from "./NoteConstructor";

describe("NoteConstructor", () => {
  const onAddItem = (): void => {};
  const onPatchItem = (): void => {};
  const note = {
    id: 1,
    type: "text",
    title: "Завтра дедлайн",
    text: "Не забыть сверстать макет",
    tags: [1, 2],
    color: 2,
    size: "s",
    created: 1551714600000
  };
  const setPopup = (): void => {};
  const setPatchItem = (): void => {};

  it("correct render", () => {
    const component = shallow(
      <NoteConstructor
        onAddItem={onAddItem}
        onPatchItem={onPatchItem}
        note={note}
        setPopup={setPopup}
        setPatchItem={setPatchItem}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("setPopup calls when submit button is clicked", () => {
    const setPopup = jest.fn();
    const component = shallow(
      <NoteConstructor
        onAddItem={onAddItem}
        onPatchItem={onPatchItem}
        note={note}
        setPopup={setPopup}
        setPatchItem={setPatchItem}
      />
    );
    const button = component.find(".button");
    button.simulate("click");
    expect(setPopup).toBeCalledWith(false);
  });

  it("setPopup calls when exit button is clicked", () => {
    const setPopup = jest.fn();
    const component = shallow(
      <NoteConstructor
        onAddItem={onAddItem}
        onPatchItem={onPatchItem}
        note={note}
        setPopup={setPopup}
        setPatchItem={setPatchItem}
      />
    );
    const button = component.find(".exit");
    button.simulate("click");
    expect(setPopup).toBeCalledWith(false);
  });

  it("setPatchItem calls when submit button is clicked", () => {
    const setPatchItem = jest.fn();
    const component = shallow(
      <NoteConstructor
        onAddItem={onAddItem}
        onPatchItem={onPatchItem}
        note={note}
        setPopup={setPopup}
        setPatchItem={setPatchItem}
      />
    );
    const button = component.find(".button");
    button.simulate("click");
    expect(setPatchItem).toBeCalledWith({});
  });

  it("setPatchItem calls when exit button is clicked", () => {
    const setPatchItem = jest.fn();
    const component = shallow(
      <NoteConstructor
        onAddItem={onAddItem}
        onPatchItem={onPatchItem}
        note={note}
        setPopup={setPopup}
        setPatchItem={setPatchItem}
      />
    );
    const button = component.find(".exit");
    button.simulate("click");
    expect(setPatchItem).toBeCalledWith({});
  });
});
