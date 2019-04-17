import React from "react";
import { shallow } from "enzyme";
import { Attachments } from "./Attachments";

describe("Attachments", () => {
  const attach = [
    { type: "link", url: "https://yandex.ru" },
    { type: "link", url: "https://ya.ru" }
  ];
  it("correct render", () => {
    const component = shallow(<Attachments attachments={attach} />);
    expect(component).toMatchSnapshot();
  });
});
