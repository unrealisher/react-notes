/*eslint-disable */
const express = require("express");
let data = require("./static/data.json");
const fs = require("fs");
const bodyParser = require("body-parser");
/*eslint-enable */

const app = express();

const getNoteFromColor = color => {
  return JSON.stringify(
    data.notes.filter(item => {
      return item.color !== undefined && item.color.toString() === color;
    })
  );
};

const getItemFromId = (id, array) => {
  return array.find(item => item.id.toString() === id);
};

app.use(bodyParser.json());
app.use(express.static("static"));

//Весь JSON

app.get("/api/data", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

//Заметки

app.get("/api/cards", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const color = req.query.color;
  if (color && color < data.colors.length) {
    res.end(getNoteFromColor(color));
  } else if (color >= data.colors.length) {
    res.statusCode = 400;
    res.send("incorrect color");
  }
  res.end(JSON.stringify(data.notes));
});

app.get("/api/cards/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const note = getItemFromId(id, data.notes);
  if (note) {
    res.end(JSON.stringify(note));
  } else {
    res.statusCode = 400;
    res.send("incorrect note id");
  }
});

//Добавление заметки

app.post("/api/cards", (req, res) => {
  const item = req.body;
  item.id = data.notes[data.notes.length - 1].id + 1;
  data.notes.push(item);
  fs.writeFile(__dirname + "/static/data.json", JSON.stringify(data), () => {});
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

//Удаление заметки

app.delete("/api/cards/:id", (req, res) => {
  const id = req.params.id;
  const item = getItemFromId(id, data.notes);
  if (item) {
    const position = data.notes.indexOf(item);
    data.notes.splice(position, 1);
    fs.writeFile(
      __dirname + "/static/data.json",
      JSON.stringify(data),
      () => {}
    );
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 400;
    res.send("incorrect note id");
  }
});

//Модификация заметки

app.patch("/api/cards/:id", (req, res) => {
  const id = req.params.id;
  const item = req.body;
  item.id = parseInt(id);
  const index = data.notes.indexOf(getItemFromId(id, data.notes));
  data.notes[index] = item;
  fs.writeFile(__dirname + "/static/data.json", JSON.stringify(data), () => {});
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

//Цвета

app.get("/api/colors", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data.colors));
});

app.get("/api/colors/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const color = getItemFromId(id, data.colors);
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
  res.end(JSON.stringify(data.tags));
});

app.get("/api/tags/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = req.params.id;
  const tag = getItemFromId(id, data.tags);
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
