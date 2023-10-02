

const express = require('express')

const app = express();

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
   //app.use(express.static('../functions/netlify/static'));
    app.get('/',(req,res)=>{
        console.log('request serverd');
        res.json({ok:1})
    })
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

