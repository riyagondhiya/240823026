const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello github");
});
app.listen(3000,()=>{
    console.log("server is running at http://localhost:0/");
});