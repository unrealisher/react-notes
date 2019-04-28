import React from "react";
import { shallow } from "enzyme";
import { NoteText } from "./NoteText";

describe("NoteText", () => {
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
  const color = "#F2C94C";
  const tags = ["Покупки", "Работа", "ШРИ"];
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <NoteText
        note={note}
        color={color}
        tags={tags}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
