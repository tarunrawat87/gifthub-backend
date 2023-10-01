
const app = require('./app')
const serverless = require('serverless-http')
let port = 4000;

module.exports = serverless(app);