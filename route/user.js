const express=require('express')
const router=express.Router();
const userscema= require('../modules/user')
const becrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const moongose= require('mongoose')
router.post('/register',(req,res,next)=>{
    
    userscema.find({email:req.body.email}).exec().then(user=>{
if(user.length>=1){
return res.status(401).json({
    message:'mail exist'
})

    }
    else{
        becrypt.hash(req.body.password,10,(err,hash)=>{


            if(err){
                console.log(err.message);
                
                return res.status(500).send(err)
            }
    
    else{
        const newuser=new userscema({
    
           
            email:req.body.email,
            password:hash
        });
    
    newuser.save().then(result=>{
    res.status(201).send('done')
    
    
    }).catch(err=>{
    res.status(404).send(err)
    
    
    })
    }
    } 
    )
   


    }


    })
})

router.delete('/:id',(req,res)=>{

    userscema.remove({_id:req.params.id}).exec().then(result=>{

res.status(200).send("deleted")

    }).catch(err=>{
res.status(400).send(err.message)


    })


})





router.post('/login',(req,res,next)=>{
userscema.find({email:req.body.email}).exec().then(users=>{
    console.log("users",users);
    console.log("  users[0]",  users[0]);
  
if(users.length<1){

    res.status(401).send('auth failed')

}

becrypt.compare(req.body.password,users[0].password,(err,result)=>{

if(err){

return res.status(401).send(err.message)

}
if(result){
   const token= jwt.sign({email:users[0].email,
      _id:users[0]._id},'secret',{

        expiresIn:"1h"
      });
return res.status(200).send({
    message:"auth ok",
    token:token


})


}

})

}).catch(err=>{
    res.status(422).send(err.message)



})




})




module.exports=router;