

const express = require('express')

const app = express();
const path = require('path');

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
   app.use(express.static('../functions/netlify/static'));
    app.get('/',(req,res)=>{
        console.log('request serverd');
        console.log(path.join(__dirname,"../functions/netlify/static"));
        res.sendFile(path.join(__dirname,"../functions/netlify/static"))
    })
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

