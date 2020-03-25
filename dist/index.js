"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data = require("./static/data.json");
var fs = require("fs");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var NotesCollection_1 = require("./classes/NotesCollection");
var localData = data;
var tags = localData.tags, colors = localData.colors, notes = localData.notes, archive = localData.archive;
var collection = NotesCollection_1.default.factory(notes);
var archiveCollection = NotesCollection_1.default.factory(archive);
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("static"));
var getNoteFromColor = function (color, collection) {
    return collection.filter(function (item) {
        return item.color !== undefined && item.color.toString() === color;
    });
};
var getItemFromId = function (id, array) {
    return array.find(function (item) { return item.id.toString() === id; });
};
//Весь JSON
app.get("/api/data", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ tags: tags, colors: colors, notes: collection.toArray() }));
});
//Заметки
app.get("/api/cards", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var color = req.query.color;
    if (color && color < colors.length) {
        res.end(JSON.stringify(getNoteFromColor(color, collection)));
    }
    else if (color >= colors.length) {
        res.statusCode = 400;
        res.send("incorrect color");
    }
    res.end(JSON.stringify(collection.toArray()));
});
app.get("/api/cards/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var note = collection.find(function (item) { return item.id.toString() === id; });
    if (note) {
        res.end(JSON.stringify(note));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect note id");
    }
});
//Заметки в архиве
app.get("/api/archive", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var color = req.query.color;
    if (color && color < colors.length) {
        res.end(JSON.stringify(getNoteFromColor(color, archiveCollection)));
    }
    else if (color >= colors.length) {
        res.statusCode = 400;
        res.send("incorrect color");
    }
    res.end(JSON.stringify(archiveCollection.toArray()));
});
//Добавление заметки
app.post("/api/cards", function (req, res) {
    var item = req.body;
    collection.addNote(item);
    localData = __assign({}, localData, { notes: collection.toArray() });
    fs.writeFile(__dirname + "/static/data.json", JSON.stringify(localData), function () { });
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(collection.toArray()));
});
//Добавление заметки в архив
app.delete("/api/cards/:id", function (req, res) {
    var id = req.params.id;
    var note = collection.toArray().find(function (item) { return item.id.toString() === id; });
    if (collection.deleteNote(parseInt(id))) {
        if (note)
            archiveCollection.addNote(note);
        localData = __assign({}, localData, { notes: collection.toArray(), archive: archiveCollection.toArray() });
        fs.writeFile(__dirname + "/static/data.json", JSON.stringify(localData), function () { });
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(collection.toArray()));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect note id");
    }
});
//Модификация заметки
app.patch("/api/cards/:id", function (req, res) {
    var id = parseInt(req.params.id);
    var item = req.body;
    if (collection.editNote(id, item)) {
        localData = __assign({}, localData, { notes: collection.toArray() });
        fs.writeFile(__dirname + "/static/data.json", JSON.stringify(localData), function () { });
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(collection.toArray()));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect request");
    }
});
//Цвета
app.get("/api/colors", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(colors));
});
app.get("/api/colors/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var color = getItemFromId(id, colors);
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
    res.end(JSON.stringify(tags));
});
app.get("/api/tags/:id", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var id = req.params.id;
    var tag = getItemFromId(id, tags);
    if (tag) {
        res.end(JSON.stringify(tag));
    }
    else {
        res.statusCode = 400;
        res.send("incorrect tag id");
    }
});
//По умолчанию
app.use(express.static(path.resolve("../build")));
app.get("/", function (req, res) { return res.sendFile(path.resolve("../build/index.html")); });
app.use("*", function (req, res) {
    return res.status(404).send("<h1>Page not found</h1>");
});
var port = process.env.PORT || 8000;
app.listen(port);
exports.default = app;
