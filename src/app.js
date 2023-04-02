const express = require('express');
const path = require("path");
const Subscriber = require("./models/subscribers");
const app = express();


//routes
//api for render html file on browser
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});


//api for get all data
app.get("/subscribers",async(req,res,next)=>{
  try{
    let subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  }catch(error){
    res.status(500);
    next(error);
  }
})


//api for get all subscribers by name and subscribed channel
app.get("/subscribers/names",async(req,res,next)=>{
  try{
    let subscribers = await Subscriber.find({}).select("name subscribedChannel");
    res.status(200).json(subscribers);
  }catch(error){
    res.status(500);
    next(error);
  }
})


//api for get subscriber by id
app.get("/subscribers/:id",async(req,res,next)=>{
  try{
    let subscribers = await Subscriber.findById(req.params.id);
    res.status(200).json(subscribers);
  }catch(error){
    res.status(400).json({message : error.message});
    next(error);
  }
})

module.exports = app;
