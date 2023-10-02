

const express = require('express')

const app = express();

const handler =  async(event, context)=>{
    const router = express.Router();
    router.use(express.static('../functions/netlify/static'));
    
    app.use('/api/',router)
    
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

