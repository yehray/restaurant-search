const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-999097.oktapreview.com',
  token: '00RcKltPGCV3P58naAXrPVkoh3VhmG1eR3_gkS1TKx'
});

module.exports = client;