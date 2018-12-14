const express=require('express')
const route=require('./route/api')
const bodyparser=require('body-parser')
const mongoses = require('mongoose');
const jwt = require('jsonwebtoken');
const userschema=require('./modules/user')
const mongose=require('./modules/nnja')
const userroute=require('./route/user');
var post=require('./route/posts')
mongoses.connect('mongodb://apissss:12345naba54321@ds031867.mlab.com:31867/try')
mongoses.connection.on('connected',()=>{
console.log("okk bb")


})
//set up  express app
const app=express()
app.use(bodyparser.json())
//intialize route middelware



app.use('/api',route)
app.use('/api/a2',post)
app.use('/api/user',userroute)

app.use((err,req,res,next)=>{

res.status(422).send({error:err.message})
   /* console.log("err",err);
    console.log("req",req);
    console.log("res",res);
    console.log("next",next);*/
    
    
    })
//listen for requist
app.listen(4000,()=>{
console.log('lisning on port localhost://4000');
})