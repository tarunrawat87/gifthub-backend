

const express = require('express')

const app = express();

const router = express.Router();
router.use(express.static('../functions/netlify/static'));
app.use((req,res,next)=>{
    console.log(req.path)
 next();   
})
app.get('/',router)

const serverless = require('serverless-http')

module.exports = serverless(app);

