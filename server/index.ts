import * as express from "express";
import * as data from "./static/data.json";
import * as fs from "fs";
import * as bodyParser from "body-parser";
import NotesCollection from "./classes/NotesCollection";

import IData from "./interfaces/IData";
import INote from "./interfaces/INote";

let localData: IData = data;
let { tags, colors, notes, archive } = localData;
const collection = NotesCollection.factory(notes);
const archiveCollection = NotesCollection.factory(archive);

const app = express();

const getNoteFromColor = (
  color: string,
  collection: NotesCollection
): INote[] => {
  return collection.filter((item: INote) => {
    return item.color !== undefined && item.color.toString() === color;
  });
};

const getItemFromId = <T extends { id: number }>(
  id: string,
  array: T[]
): T | undefined => {
  return array.find(item => item.id.toString() === id);
};

app.use(bodyParser.json());
app.use(express.static("static"));

//Весь JSON

app.get("/api/data", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ tags, colors, notes: collection.toArray() }));
});

//Заметки

app.get("/api/cards", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const color = req.query.color;
  if (color && color < colors.length) {
    res.end(JSON.stringify(getNoteFromColor(color, collection)));
  } else if (color >= colors.length) {
    res.statusCode = 400;
    res.send("incorrect color");
  }
  res.end(JSON.stringify(collection.toArray()));
});

app.get("/api/cards/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const note = collection.find(item => item.id.toString() === id);
  if (note) {
    res.end(JSON.stringify(note));
  } else {
    res.statusCode = 400;
    res.send("incorrect note id");
  }
});

//Заметки в архиве

app.get("/api/archive", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const color = req.query.color;
  if (color && color < colors.length) {
    res.end(JSON.stringify(getNoteFromColor(color, archiveCollection)));
  } else if (color >= colors.length) {
    res.statusCode = 400;
    res.send("incorrect color");
  }
  res.end(JSON.stringify(archiveCollection.toArray()));
});

//Добавление заметки

app.post("/api/cards", (req, res) => {
  const item = req.body;
  collection.addNote(item);
  localData = { ...localData, notes: collection.toArray() };
  fs.writeFile(
    __dirname + "/static/data.json",
    JSON.stringify(localData),
    () => {}
  );
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(collection.toArray()));
});

//Удаление заметки

app.delete("/api/cards/:id", (req, res) => {
  const id = req.params.id;
  if (collection.deleteNote(parseInt(id))) {
    localData = { ...localData, notes: collection.toArray() };
    fs.writeFile(
      __dirname + "/static/data.json",
      JSON.stringify(localData),
      () => {}
    );
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(localData));
  } else {
    res.statusCode = 400;
    res.send("incorrect note id");
  }
});

//Модификация заметки

app.patch("/api/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item: INote = req.body;
  if (collection.editNote(id, item)) {
    localData = { ...localData, notes: collection.toArray() };
    fs.writeFile(
      __dirname + "/static/data.json",
      JSON.stringify(localData),
      () => {}
    );
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(localData));
  } else {
    res.statusCode = 400;
    res.send("incorrect request");
  }
});

//Цвета

app.get("/api/colors", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(colors));
});

app.get("/api/colors/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const color = getItemFromId(id, colors);
  if (color) {
    res.end(JSON.stringify(color));
  } else {
    res.statusCode = 400;
    res.send("incorrect color id");
  }
});

//Теги

app.get("/api/tags", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(tags));
});

app.get("/api/tags/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const tag = getItemFromId(id, tags);
  if (tag) {
    res.end(JSON.stringify(tag));
  } else {
    res.statusCode = 400;
    res.send("incorrect tag id");
  }
});

//По умолчанию

app.get("/*", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 404;
  res.sendFile(__dirname + "/static/404.html");
});

app.listen(8000);
