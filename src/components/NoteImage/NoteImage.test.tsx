import React from "react";
import { shallow } from "enzyme";
import { NoteImage } from "./NoteImage";

describe("NoteImage", () => {
  const note = {
    id: 7,
    type: "image",
    url:
      "https://avatars.mds.yandex.net/get-pdb/1534889/a869b7ef-32da-41e7-8703-326ae860e67f/orig",
    tags: [3],
    size: "m",
    created: 1548969900000
  };
  const tags = ["коты"];
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <NoteImage
        note={note}
        tags={tags}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
