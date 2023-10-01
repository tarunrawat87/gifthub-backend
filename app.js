

const express = require('express')

const app = express();

app.use(express.static('../gift/gift-app/build'))

module.exports = app;