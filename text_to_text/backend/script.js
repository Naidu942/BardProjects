
const express=require('express');
const app = express();
const run=require('./config/bardCode.js')
require('dotenv').config()


app.use(express.json())


app.get('/',(req,res)=>{
    res.send("welcome to our application")
})


app.post('/',async(req,res)=>{
    const prompt=req.body.prompt
    console.log(prompt)
    const result=await run(prompt)
    res.send(result)

})


app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})






