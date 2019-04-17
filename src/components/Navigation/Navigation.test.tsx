import React from "react";
import { shallow } from "enzyme";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
  const onActiveClick = (): void => {};
  const onArchiveClick = (): void => {};
  const onFetchArchive = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <Navigation
        onActiveClick={onActiveClick}
        onArchiveClick={onArchiveClick}
        onFetchArchive={onFetchArchive}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
