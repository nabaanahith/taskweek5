const express=require('express')
const router=express.Router();
const postexports= require('../modules/post')

router.post('/post',(req,res)=>{
        
var ipost=new postexports({



})
/*var ipost=new postexports(req.body)
ipost.save().then((response)=>{

res.send(response)

}).catch(err=>{

res.status(422).send(err.message)


})
*/



})
router.get('/regesteration',(req,res)=>{


})

router.get('/',(req,res)=>{
    postexports.find({user:req.params.id}).populate('user')
    postexports.find({})
    .limit(2).then(result=>
        {
           res.status(200).send(result)
        }
        
        ).catch(err=>{

res.status(422).send(err.message)


        })
})


router.put('/:id',(req,res)=>{

postexports.update({_id:req.params.id},{$set:{title:req.body.title,description:req.body.description}})
.then(resu=>{

res.send(resu)

}).catch(err=>{
res.send(err.message)


})

})


router.delete('/:id',(req,res)=>{


postexports.remove({_id:req.params.id}).then(ress=>{


    res.send(ress)
}).catch(err => {
    res.status(404).send(err);
  });


})


module.exports=router;