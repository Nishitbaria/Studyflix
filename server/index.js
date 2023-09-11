/** @format */

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express.js! Lets see what happen");
});

app.listen(3000, () => {
  console.log(`Server listening at 3000`);
});