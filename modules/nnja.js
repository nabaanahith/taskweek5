const mongose=require('mongoose')
const schema=mongose.Schema;
//create nnja schema and model
const nnjaschema=new schema({
name:{
    
    type:String,
   /* required:function(){
       return this.age
    },*/
    required:[true,'name required']
},
rank:{
    
    type:String,
 
},
avalibilty:{
    
    type:Boolean,
    default:false
 
}
});

const ninja=mongose.model('nnjs',nnjaschema)
module.exports=ninja;