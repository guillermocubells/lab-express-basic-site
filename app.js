const express = require("express");
const app = express();

console.log("ABSOLUTE PATH TO CURRENT FILE", __dirname);

app.get("/homepage", (request, response) => {
  response.sendFile(__dirname + '/views/homepage.html');
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + '/views/work.html');
});

app.listen(5500, () => {
  console.log('Running on localhost:5500');
});
