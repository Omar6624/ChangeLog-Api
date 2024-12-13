const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "helllo", code: 29034 });
});

module.exports = app;
