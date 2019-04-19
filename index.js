/*eslint-disable*/
const express = require("express");
const path = require("path");
const cors = require("cors");
/*eslint-enable*/

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(path.resolve("build")));
app.get("/", (req, res) => res.sendFile(path.resolve("build/index.html")));

app.use("*", (req, res) => {
  return res.status(404).send("<h1>Page not found</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port);
