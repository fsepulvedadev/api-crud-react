const express = require("express");

const app = express();

var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.json({ mensaje: "Hola Mundo!" });
});

app.get("/cervezas", function (req, res) {
  res.json({ mensaje: "A beber Cerveza!" });
});

app.post("/", function (req, res) {
  res.json({ mensaje: "Metodo post" });
});

app.delete("/", function (req, res) {
  res.json({ mensaje: "Metodo Delete" });
});

app.listen(port);
console.log("API escuchando en el puerto " + port);
