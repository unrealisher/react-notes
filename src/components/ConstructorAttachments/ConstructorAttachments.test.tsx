import React from "react";
import { shallow, mount } from "enzyme";
import { ConstructorAttachments } from "./ConstructorAttachments";

describe("ConstructorAttachments", () => {
  const type = "link";
  const name = "link";
  const onTypeChange = (): void => {};
  const items = [
    "https://avatars.mds.yandex.net/get-pdb/1816426/93eab951-b130-4cf9-98d6-01e250be5530/orig",
    "https://avatars.mds.yandex.net/get-pdb/1823123/fc6cf893-91b5-4e80-9f02-82acfc6fe30c/orig",
    "https://avatars.mds.yandex.net/get-pdb/1816426/c68f1a18-f763-4a98-8a17-f7d7725753b6/orig"
  ];
  const setAttachItems = (): void => {};
  const checked = true;
  const setChecked = (): void => {};

  it("correct render", () => {
    const component = shallow(
      <ConstructorAttachments
        type={type}
        name={name}
        onTypeChange={onTypeChange}
        items={items}
        setAttachItems={setAttachItems}
        checked={checked}
        setChecked={setChecked}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("call setChecked when checkbox checked", () => {
    const setChecked = jest.fn();
    const component = mount(
      <ConstructorAttachments
        type={type}
        name={name}
        onTypeChange={onTypeChange}
        items={items}
        setAttachItems={setAttachItems}
        checked={checked}
        setChecked={setChecked}
      />
    );
    const checkbox = component.find(".checkbox");
    checkbox.simulate("change");
    expect(setChecked).toBeCalledWith(!checked);
  });
});
