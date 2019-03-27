/*eslint-disable */
const express = require("express");
const data = require("./static/data.json");
/*eslint-enable */

const app = express();

app.use(express.static("static"));

app.get("/api/cards", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.query.color) {
    res.end(JSON.stringify(data.colors[req.query.color]));
  }
  res.end(JSON.stringify(data.notes));
});

app.listen(8000);
