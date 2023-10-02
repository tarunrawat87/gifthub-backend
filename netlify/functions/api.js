

const express = require('express')

const app = express();

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use(express.static('../functions/netlify/static'));
    router.get('/',(req,res)=>{
        console.log(' got the request');
        res.json({ok:1});
    })
    
    app.use('/api/',router)
    
    const serverless = require('serverless-http')
    
    return serverless(api)(event, context)    
}

module.exports = {
    handler
}

