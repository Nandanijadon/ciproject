const express = require("express");
const app = express();

app.get('/api/get',(req,res)=>{
    res.send({message:"hey Nandani this side"})
})
app.listen(8000,()=>{
    console.log("your server is connected to 8000 port");
})