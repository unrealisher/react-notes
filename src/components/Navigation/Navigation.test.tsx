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

  it("onActiveClick calls when button is clicked", () => {
    const onActiveClick = jest.fn();
    const component = shallow(
      <Navigation
        onActiveClick={onActiveClick}
        onArchiveClick={onArchiveClick}
        onFetchArchive={onFetchArchive}
        setPopup={setPopup}
      />
    );
    const button = component.find(".button").first();
    button.simulate("click");
    expect(onActiveClick).toBeCalled();
  });

  it("setPopup calls when button is clicked", () => {
    const setPopup = jest.fn();
    const component = shallow(
      <Navigation
        onActiveClick={onActiveClick}
        onArchiveClick={onArchiveClick}
        onFetchArchive={onFetchArchive}
        setPopup={setPopup}
      />
    );
    const button = component.find(".button_add");
    button.simulate("click");
    expect(setPopup).toBeCalledWith(true);
  });

  it("onArchiveClick calls when button is clicked", () => {
    const onArchiveClick = jest.fn();
    const component = shallow(
      <Navigation
        onActiveClick={onActiveClick}
        onArchiveClick={onArchiveClick}
        onFetchArchive={onFetchArchive}
        setPopup={setPopup}
      />
    );
    const button = component.find(".item_archive button");
    button.simulate("click");
    expect(onArchiveClick).toBeCalled();
  });

  it("onFetchArchive calls when button is clicked", () => {
    const onFetchArchive = jest.fn();
    const component = shallow(
      <Navigation
        onActiveClick={onActiveClick}
        onArchiveClick={onArchiveClick}
        onFetchArchive={onFetchArchive}
        setPopup={setPopup}
      />
    );
    const button = component.find(".item_archive button");
    button.simulate("click");
    expect(onFetchArchive).toBeCalled();
  });
});
