const express = require("express");
const all = require("./all").all;
const forum = require("./forum").forum;

const app = express();
const PORT = 7070;

app.get(/v1\/users\/(.*)\/feeds\/all/, (req, res) => {
  res.json(all);
});
app.get(/v1\/users\/(.*)\/feeds\/forums/, (req, res) => {
  res.json(forums);
});
app.listen(PORT, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server running on port " + PORT);
});
