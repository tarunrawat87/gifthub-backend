

const express = require('express')

const app = express();

const router = app.router();
router.use(express.static('../functions/netlify/static'));

app.get('/',router)

const serverless = require('serverless-http')

module.exports = serverless(app);

