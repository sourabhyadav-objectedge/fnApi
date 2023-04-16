const express = require("express");
const all = require("./all").all;
const forums = require("./forum").forum;
const functions = require("./function").functions;
const members = require("./members").members;
const groups = require("./groups").groups;
const deals = require("./deals").deals;

const app = express();
const PORT = 7070;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function filter(array, filters) {
  const offset = filters["offset"] ? parseInt(filters["offset"]) : 0;
  const limit = filters["limit"] ? parseInt(filters["limit"]) : 10;
  const result = filters["sortby"]
    ? shuffle(array.slice()).slice(offset, offset + limit)
    : array.slice(offset, offset + limit);
  return result;
}

app.get(/v1\/users\/(.*)\/feeds\/all/, (req, res) => {
  res.json(filter(all, req.query));
});
app.get(/v1\/users\/(.*)\/feeds\/forums/, (req, res) => {
  res.json(filter(forums, req.query));
});
app.get(/v1\/users\/(.*)\/feeds\/function/, (req, res) => {
  res.json(filter(functions, req.query));
});
app.get(/v1\/users\/(.*)\/feeds\/members/, (req, res) => {
  res.json(filter(members, req.query));
});
app.get(/v1\/users\/(.*)\/feeds\/groups/, (req, res) => {
  res.json(filter(groups, req.query));
});
app.get(/v1\/users\/(.*)\/feeds\/deals/, (req, res) => {
  res.json(filter(deals, req.query));
});

app.listen(PORT, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server running on port " + PORT);
});
