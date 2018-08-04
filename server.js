const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
var config = require("./config.js");


const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = config.YELP_API_KEY;
const client = yelp.client(apiKey);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/:search/:location', (req, res, next) => {
  var searchTerm = req.params.search;
  var locationTerm = req.params.location; 
  const searchRequest = {
    term: "food",
    location: "milpitas",
    limit: 50
  };

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.parse(JSON.stringify(firstResult, null, 4));
    for(var i = 0; i < prettyJson.length; i++) {
      var obj = prettyJson[i];
      console.log(obj.name);
  }
    res.send({express: prettyJson});

  }).catch(e => {
    console.log(e);
  });

});

app.listen(process.env.PORT || 8080);