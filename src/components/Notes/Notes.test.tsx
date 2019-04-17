import React from "react";
import { shallow } from "enzyme";
import { Notes } from "./Notes";

describe("Notes", () => {
  const state = {
    colors: [],
    tags: [],
    notes: [],
    archive: [],
    activeNotes: true,
    filter: [],
    search: ""
  };
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <Notes state={state} setPatchItem={setPatchItem} setPopup={setPopup} />
    );
    expect(component).toMatchSnapshot();
  });
});
