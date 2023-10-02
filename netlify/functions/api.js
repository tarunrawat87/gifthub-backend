

const express = require('express')

const app = express();
const path = require('path');

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
   app.use(express.static('./static'));
    app.get('/',(req,res)=>{
        console.log('request serverd',__dirname);
        console.log(path.join(__dirname,"../../staic"));
        res.sendFile("./static/index.html");
    })
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

