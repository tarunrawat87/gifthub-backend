

const express = require('express')

const app = express();

const router = express.Router();
//router.use(express.static('../functions/netlify/static'));
router.get('/',(req,res)=>{
    console.log(' got the request');
    res.json({ok:1});
})

app.use('/api/',router)

const serverless = require('serverless-http')

module.exports = serverless(app);

