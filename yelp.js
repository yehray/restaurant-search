const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'Gx5Dj1yuUvGIOu1iZ5OC8Lq2jT8xh7Yy_SGSnn2_-zc4wNO0Tuz0ehsI0o4IDu-sgzocHTBknrh-SqP8W5M6REkMDXiaIuBfxSfrIKxImrctBtDhvVzvGDeCrR1RW3Yx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});