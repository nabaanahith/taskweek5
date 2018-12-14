const mongoose=require('mongoose');

var schema=mongoose.Schema;
const userschema=new schema({


email:{
unique:true,
    type:String,
    require:true,
    match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    
},
password:{type:String,required:true}



});



















module.exports=mongoose.model('user',userschema);