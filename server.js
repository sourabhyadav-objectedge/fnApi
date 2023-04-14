const express = require("express");
const all = require("./all").all;
const forum = require("./forum").forum;
const functions = require("./function").functions;
const members = require("./members").members;
const groups = require("./groups").groups;

const app = express();
const PORT = 7070;

app.get(/v1\/users\/(.*)\/feeds\/all/, (req, res) => {
  res.json(all);
});
app.get(/v1\/users\/(.*)\/feeds\/forums/, (req, res) => {
  res.json(forums);
});
app.get(/v1\/users\/(.*)\/feeds\/function/, (req, res) => {
  res.json(functions);
});
app.get(/v1\/users\/(.*)\/feeds\/members/, (req, res) => {
  res.json(members);
});
app.get(/v1\/users\/(.*)\/feeds\/groups/, (req, res) => {
  res.json(groups);
});
app.listen(PORT, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server running on port " + PORT);
});
