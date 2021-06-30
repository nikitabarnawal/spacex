// Server

const express = require("express");
const api_helper = require('./apiHelper');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/launches', (req, res) => {
  api_helper.make_API_call(`https://api.spacexdata.com/v4${req.url}`)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/rockets', (req, res) => {
  api_helper.make_API_call(`https://api.spacexdata.com/v4${req.url}`)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.send(error)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
