const express = require("express");
const app = express();
const Database = require("./database");
const db = new Database();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("./dist/CoffeeSmart"));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/CoffeeSmart" });
});

module.exports = app;
