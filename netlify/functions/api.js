

const express = require('express')

const app = express();
const path = require('path');

const handler =  async(event, context)=>{
    const router = express.Router();
    //router.use();
    
  // app.use(express.static('./static'));

  const fs = require('fs');

    app.get('/',(req,res)=>{
        let testFolder = path.join(__dirname,"../../");
        fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
        });
        res.sendFile(path.join(__dirname,"../../static/index.html"));

    })
    const serverless = require('serverless-http')
    
    return serverless(app)(event, context)    
}

module.exports = {
    handler
}

