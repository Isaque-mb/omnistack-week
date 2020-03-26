const express = require("express");
const app = express(); // variavel the aplicacao

app.get("/", (request, response) => {
  return response.json({
    event: "Omnistack Week 11.0",
    student: "Isaque Brandao"
  });
});

app.listen(3333);
