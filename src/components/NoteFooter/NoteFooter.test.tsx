import React from "react";
import { shallow } from "enzyme";
import { NoteFooter } from "./NoteFooter";

describe("NoteFooter", () => {
  const activeNotes = true;
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
  const tags = ["Покупки", "Работа", "ШРИ"];
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <NoteFooter
        activeNotes={activeNotes}
        note={note}
        tags={tags}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
