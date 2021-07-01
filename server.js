// Server

const express = require("express");
const api_helper = require('./apiHelper');
const app = express();
var cors = require('cors')
const port = 4000;

app.use(cors());
app.get("/", (req, res) => {
  const { limit, offset } = req.query;
  console.log(12, limit, offset);
  api_helper.make_API_call(`https://api.spacexdata.com/v4/launches/past`)
    .then(response => {
      //for pagination- use offset and limit
      res.json(limit ? response.slice(offset, limit) : response);
    })
    .catch(error => {
      res.send(error)
    })
});

app.get('/launches', (req, res) => {
  const { limit, offset } = req.query;
  const url = req.url;
  const endpoint = url.split('?')[0];
  api_helper.make_API_call(`https://api.spacexdata.com/v4${endpoint}`)
    .then(response => {
      //for pagination- use offset and limit
      res.json(limit ? response.slice(offset, limit) : response);
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/rockets', (req, res) => {
  const { limit, offset } = req.query;
  const url = req.url;
  const endpoint = url.split('?')[0];
  api_helper.make_API_call(`https://api.spacexdata.com/v4${endpoint}`)
    .then(response => {
      //for pagination- use offset and limit
      res.json(limit ? response.slice(offset, limit) : response);
    })
    .catch(error => {
      res.send(error)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
