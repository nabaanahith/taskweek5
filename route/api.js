const express=require('express')
const router=express.Router();
const nnja= require('../modules/nnja')
//get from db
router.get('/nnjis',(req,res)=>{
/*nnja.findById(req.params.id).then((result)=>{


  res.send(result)
})*/

  nnja.find({ }) // This is means WHERE NAME == Hamdon && AGE == 24
  .limit(10)  //  This for setting a limit to the requesr
 //  Sorting according the name 1 mean asc -1 means desc
 //  Means that get me the name and age only
  .then(result => {
    res.send(result);
  }).catch(err => {
    res.status(400).send(err)
  })

});
router.post('/nnjis',(req,res,next)=>{
var nn= new nnja(req.body)
nn.save().then(function(nnja2){
res.send(nnja2)
}).catch(next)
    
    });

    router.put('/nnjis/:id',(req,res)=>{
      nnja.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
nnja.findOne({_id:req.params.id}).then((result)=>{


  res.send(result)
})
     
        
        });
      })

        router.delete('/nnjis/:id',(req,res,next)=>{

          //  console.log(req.params.id);
          nnja.findByIdAndRemove({_id:req.params.id}).then((result)=>{
res.send(result)


          }).catch(ree=>{
res.status(422).send(ree)


          })
            
            
            });
            


            module.exports=router;