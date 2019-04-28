import React from "react";
import IState from "../../interfaces/IState";
import { rootReducer } from "./rootReducer";
import IData from "../../interfaces/IData";
import { actionTypes } from "../actions/actionTypes";
import INote from "../../interfaces/INote";

describe("reducer", () => {
  const initialState: IState = {
    colors: [],
    tags: [],
    notes: [],
    archive: [],
    activeNotes: true,
    filter: [],
    search: ""
  };

  it("Correct Fetch Data", () => {
    const data = {
      tags: [{ id: 0, tag: "покупки" }, { id: 1, tag: "Работа" }],
      colors: [{ id: 0, color: "#E84747" }, { id: 1, color: "#F2994A" }],
      notes: [
        {
          id: 2,
          type: "text",
          text: "Купить чайник с Bluetooth\nВидел у Xiaomi на днях",
          tags: [0],
          size: "s",
          created: 1551593220000
        }
      ]
    };
    expect(
      rootReducer(initialState, {
        type: actionTypes.FETCH_DATA,
        payload: data
      })
    ).toEqual({
      ...initialState,
      ...data
    });
  });

  it("Correct Fetch Archive", () => {
    const archive = [
      {
        id: 2,
        type: "text",
        text: "Купить чайник с Bluetooth\nВидел у Xiaomi на днях",
        tags: [0],
        size: "s",
        created: 1551593220000
      }
    ];
    expect(
      rootReducer(initialState, {
        type: actionTypes.FETCH_ARCHIVE,
        payload: archive
      })
    ).toEqual({
      ...initialState,
      archive
    });
  });

  it("Correct add note", () => {
    const note = {
      id: 2,
      type: "text",
      text: "Купить чайник с Bluetooth\nВидел у Xiaomi на днях",
      tags: [0],
      size: "s",
      created: 1551593220000
    };
    expect(
      rootReducer(initialState, { type: actionTypes.ADD_NOTE, payload: [note] })
    ).toEqual({ ...initialState, notes: [note] });
  });

  it("Correct patch note", () => {
    const note = {
      id: 2,
      type: "text",
      text: "Купить чайник с Bluetooth\nВидел у Xiaomi на днях",
      tags: [0],
      size: "s",
      created: 1551593220000
    };
    expect(
      rootReducer(initialState, {
        type: actionTypes.PATCH_NOTE,
        payload: [note]
      })
    ).toEqual({ ...initialState, notes: [note] });
  });

  it("Correct setActive notes", () => {
    const state = { ...initialState, activeNotes: false };
    expect(rootReducer(state, { type: actionTypes.SET_ACTIVE_NOTES })).toEqual(
      initialState
    );
  });

  it("Correct setArchive notes", () => {
    expect(
      rootReducer(initialState, { type: actionTypes.SET_ARCHIVE_NOTES })
    ).toEqual({ ...initialState, activeNotes: false });
  });

  it("Correct checkItem from false to true", () => {
    const note = {
      id: 0,
      type: "list",
      title: "Список покупок",
      tags: [0],
      color: 0,
      items: [
        { text: "Оливочки", checked: false },
        { text: "Макароны", checked: false },
        { text: "Яйца", checked: true },
        { text: "Сливки", checked: false },
        { text: "Хлеб", checked: true }
      ],
      size: "l",
      created: 1551780000000
    };
    const state = { ...initialState, notes: [note] };
    expect(
      rootReducer(state, {
        type: actionTypes.CHECK_ITEM,
        payload: {
          note,
          itemIndex: 1
        }
      })
    ).toEqual({
      ...state,
      notes: [
        {
          ...note,
          items: [
            { text: "Оливочки", checked: false },
            { text: "Макароны", checked: true },
            { text: "Яйца", checked: true },
            { text: "Сливки", checked: false },
            { text: "Хлеб", checked: true }
          ]
        }
      ]
    });
  });

  it("Correct checkItem from true to false", () => {
    const note = {
      id: 0,
      type: "list",
      title: "Список покупок",
      tags: [0],
      color: 0,
      items: [
        { text: "Оливочки", checked: false },
        { text: "Макароны", checked: false },
        { text: "Яйца", checked: true },
        { text: "Сливки", checked: false },
        { text: "Хлеб", checked: true }
      ],
      size: "l",
      created: 1551780000000
    };
    const state = { ...initialState, notes: [note] };
    expect(
      rootReducer(state, {
        type: actionTypes.CHECK_ITEM,
        payload: {
          note,
          itemIndex: 2
        }
      })
    ).toEqual({
      ...state,
      notes: [
        {
          ...note,
          items: [
            { text: "Оливочки", checked: false },
            { text: "Макароны", checked: false },
            { text: "Яйца", checked: false },
            { text: "Сливки", checked: false },
            { text: "Хлеб", checked: true }
          ]
        }
      ]
    });
  });

  it("Correct add item in empty filter", () => {
    expect(
      rootReducer(initialState, { type: actionTypes.FILTER_ITEMS, payload: 1 })
    ).toEqual({
      ...initialState,
      filter: [1]
    });
  });

  it("Correct add item filter in non-empty filter", () => {
    const state = { ...initialState, filter: [0, 2, 3] };
    expect(
      rootReducer(state, { type: actionTypes.FILTER_ITEMS, payload: 1 })
    ).toEqual({
      ...state,
      filter: [0, 2, 3, 1]
    });
  });

  it("Correct remove item from filter array", () => {
    const state = { ...initialState, filter: [0, 2, 3] };
    expect(
      rootReducer(state, { type: actionTypes.FILTER_ITEMS, payload: 0 })
    ).toEqual({
      ...state,
      filter: [2, 3]
    });
  });

  it("Correct add search", () => {
    expect(
      rootReducer(initialState, {
        type: actionTypes.SEARCH_ITEMS,
        payload: "Hello"
      })
    ).toEqual({ ...initialState, search: "Hello" });
  });

  it("Correct remove search", () => {
    const state = { ...initialState, search: "Hello" };
    expect(
      rootReducer(state, { type: actionTypes.SEARCH_ITEMS, payload: "" })
    ).toEqual({
      ...state,
      search: ""
    });
  });
});
