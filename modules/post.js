var dbmongoose=require('mongoose')
var schema=dbmongoose.Schema;
/*const newpost=new schema({
    title:String,
    desc:Boolean,
    numberOfLikes:Number
});*/
const newpost=new schema({
user:{
type:dbmongoose.Schema.Types.ObjectId,
ref:'ninja',
required:true

},
title:{type:String,
    required:[true,'you have set title']},
desc:String,


})
var postexports=dbmongoose.model('posts',newpost)
module.exports=postexports;



