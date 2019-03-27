"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data = require("./static/data.json");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var getNoteFromColor = function (color) {
    return data.notes.filter(function (item) {
        return item.color !== undefined && item.color.toString() === color;
    });
};
var getItemFromId = function (id, array) {
    return array.find(function (item) { return item.id.toString() === id; });
};
app.use(bodyParser.json());
app.use(express.static("static"));
//Весь JSON
app.get("/api/data", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});
//Заметки
app.get("/api/cards", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var color = req.query.color;
    if (color && color < data.colors.length) {
        res.end(JSON.stringify(getNoteFromColor(color)));
    }
    else if (color >= data.colors.length) {
        res.statusCode = 400;
        res.send("incorrect color");
    }
    res.end(JSON.stringify(data.notes));
});
app.get("/api/cards/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var note = getItemFromId(id, data.notes);
    if (note) {
        res.end(JSON.stringify(note));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect note id");
    }
});
//Добавление заметки
app.post("/api/cards", function (req, res) {
    var item = req.body;
    item.id = data.notes[data.notes.length - 1].id + 1;
    data.notes.push(item);
    fs.writeFile(__dirname + "/static/data.json", JSON.stringify(data), function () { });
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
});
//Удаление заметки
app.delete("/api/cards/:id", function (req, res) {
    var id = req.params.id;
    var item = getItemFromId(id, data.notes);
    if (item) {
        var position = data.notes.indexOf(item);
        data.notes.splice(position, 1);
        fs.writeFile(__dirname + "/static/data.json", JSON.stringify(data), function () { });
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect note id");
    }
});
//Модификация заметки
app.patch("/api/cards", function (req, res) {
    var item = req.body;
    var oldItem = getItemFromId(item.id, data.notes);
    if (oldItem) {
        var index = data.notes.indexOf(oldItem);
        data.notes[index] = item;
        fs.writeFile(__dirname + "/static/data.json", JSON.stringify(data), function () { });
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }
});
//Цвета
app.get("/api/colors", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data.colors));
});
app.get("/api/colors/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var color = getItemFromId(id, data.colors);
    if (color) {
        res.end(JSON.stringify(color));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect color id");
    }
});
//Теги
app.get("/api/tags", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data.tags));
});
app.get("/api/tags/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var tag = getItemFromId(id, data.tags);
    if (tag) {
        res.end(JSON.stringify(tag));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect tag id");
    }
});
//По умолчанию
app.get("/*", function (req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 404;
    res.sendFile(__dirname + "/static/404.html");
});
app.listen(8000);
