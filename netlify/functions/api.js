

const express = require('express')

const app = express();
const path = require('path');

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
  // app.use(express.static('./static'));
    const cssHash = "5added3e";
    const jsHash     = "e57b1c2c";
    const title = "Gifthub 01"

    const handler = (req,res)=>{
        res.setHeader("Content-Type", "text/html");
        let str =`<!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="One Place for All your Gifts.." />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="https://cdn.jsdelivr.net/gh/tarunrawat87/gifthub-backend/static/manifest.json" />
            <title>${title}</title>
            <script defer="defer" src="https://cdn.jsdelivr.net/gh/tarunrawat87/gifthub-backend/static/static/js/main.${jsHash}.js"></script>
            <link href="https://cdn.jsdelivr.net/gh/tarunrawat87/gifthub-backend/static/static/css/main.${cssHash}.css" rel="stylesheet">
        </head>
        
        <body><noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        </body>
        
        </html>`
        res.send(str);
    }
    app.get('/',handler);

    app.get('*',handler);
    
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

