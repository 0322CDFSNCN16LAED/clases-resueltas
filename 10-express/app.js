const path = require("path");
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("El servidor prendio, por si no sabias");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/babagge", (req, res) => {
  res.sendFile(path.join(__dirname, "views/babagge.html"));
});
app.get("/berners-lee", (req, res) => {
  res.sendFile(path.join(__dirname, "views/berners-lee.html"));
});
app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "views/clarke.html"));
});
app.get("/hamilton", (req, res) => {
  res.sendFile(path.join(__dirname, "views/hamilton.html"));
});
app.get("/hopper", (req, res) => {
  res.sendFile(path.join(__dirname, "views/hopper.html"));
});
app.get("/lovelace", (req, res) => {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});
app.get("/turing", (req, res) => {
  res.sendFile(path.join(__dirname, "views/turing.html"));
});
