import React from "react";
import { shallow } from "enzyme";
import { Edit } from "./Edit";

describe("Edit", () => {
  const onArchiveClick = (): void => {};
  const note = {
    id: 6,
    type: "text",
    text:
      "Реферат до 2 апреля (300 терминов, аннотация, основная, заключение, список литературы)\nПеревод 40к знаков к зачету, 40к к экзамену\nТест 1 и 2\n\nПодготовка кадров зарубежом (юнит 2)\nНаучно исследовательская работа магистранта (юнит 2)\nРоль науки (юнит 1)\n10-15 предложений минимум",
    tags: [5, 6],
    color: 1,
    size: "m",
    created: 1549189500000
  };
  const setPatchItem = (): void => {};
  const setPopup = (): void => {};
  it("correct render", () => {
    const component = shallow(
      <Edit
        onArchiveClick={onArchiveClick}
        note={note}
        setPatchItem={setPatchItem}
        setPopup={setPopup}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
