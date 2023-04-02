
const express = require('express');
const path = require("path");
const app = express();


//routes
//api for render html file on browser
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});





















module.exports = app;
