 const express = require('express');

 const fs = require('fs');
 const path =require('path');
 const mongoose = require('mongoose');
const todo = require('./router');
 require('dotenv').config();
 const PORT = process.env.PORT;


 const app = express();
 app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
 
app.use(express.static(path.join(__dirname, 'public')));



 const mongooseUrl = 'mongodb://localhost:27017/bigbazar'
 mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
 .then(()=>{
     console.log('connection is succesfull');
 })
 .catch((err)=>{
     console.log(err);
 })
 const CustomerSchema = require('./mongooseSchema');



 app.use('/customers', todo);


 
    
    

 app.get('/',(req, res)=>{
     res.sendFile(path.join(__dirname, 'index.html'))
//    res.status(200).json({
//        message:"connected"
//    })
 })


 app.listen(3000, ()=>{
     console.log(`I am listening 3000`);
 })