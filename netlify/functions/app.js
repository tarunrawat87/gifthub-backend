

const express = require('express')

const app = express();

app.use(express.static('../gift/gift-app/build'))

const serverless = require('serverless-http')

module.exports = serverless(app);

