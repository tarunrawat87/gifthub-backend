

const express = require('express')

const app = express();
const path = require('path');

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
  // app.use(express.static('./static'));


    app.get('/',(req,res)=>{
        res.setHeader("Content-Type", "text/html");
        let str =`<!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
            <title>React App</title>
            <script defer="defer" src="https://cdn.jsdelivr.net/gh/tarunrawat87/gifthub-backend/static/static/js/main.d47360f7.js"></script>
            
            <link href="https://cdn.jsdelivr.net/gh/tarunrawat87/gifthub-backend/static/static/css/main.246749cb.css" rel="stylesheet">
        </head>
        
        <body><noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        </body>
        
        </html>`
        res.json(str);
    });

    
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

