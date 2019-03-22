import React from "react";

import Note from "./Note";

import { storiesOf } from "@storybook/react";

import "./../../index.scss";

const note = {
  type: "list",
  title: "Список покупок",
  tags: [0],
  color: 0,
  item: [
    {
      text: "Оливочки",
      checked: false
    },
    {
      text: "Макароны",
      checked: false
    },
    {
      text: "Яйца",
      checked: true
    },
    {
      text: "Сливки",
      checked: false
    },
    {
      text: "Хлеб",
      checked: true
    },
    {
      text: "Чеснок",
      checked: false
    },
    {
      text: "Сыр",
      checked: true
    },
    {
      text: "Помидорки",
      checked: false
    },
    {
      text: "Ветчина",
      checked: true
    },
    {
      text: "Чай",
      checked: true
    },
    {
      text: "Огурец",
      checked: false
    },
    {
      text: "Масло сливочное",
      checked: true
    },
    {
      text: "Вино",
      checked: true
    },
    {
      text: "Камамбер",
      checked: true
    },
    {
      text: "Сыр фета",
      checked: true
    },
    {
      text: "Васаби",
      checked: true
    },
    {
      text: "Соевый соус",
      checked: true
    },
    {
      text: "Вкусняшки",
      checked: false
    },
    {
      text: "Красный имбирь",
      checked: true
    },
    {
      text: "Гвоздика",
      checked: true
    },
    {
      text: "Кардамон",
      checked: true
    },
    {
      text: "Овсяные хлопья",
      checked: true
    },
    {
      text: "Пельмени",
      checked: true
    },
    {
      text: "Сметана",
      checked: true
    }
  ],
  size: "l",
  created: 1551780000000
};

const color = "#E84747";

const tags = ["покупки"];

storiesOf("Note", module).add("list", () => (
  <Note note={note} color={color} tags={tags} />
));
