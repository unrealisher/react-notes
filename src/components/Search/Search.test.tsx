import React from "react";
import { shallow } from "enzyme";
import { Search } from "./Search";

describe("Search", () => {
  const search = "";
  const onTextChange = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <Search search={search} onTextChange={onTextChange} />
    );
    expect(component).toMatchSnapshot();
  });
});
