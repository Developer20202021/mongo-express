
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerSchema = require('./mongooseSchema');

const CustomerModel = new mongoose.model('customer', CustomerSchema);


router.get("/home", (req,res)=>{
    
})


router.post("/home", (req,res)=>{
    
})


router.put("/home", (req,res)=>{
    
})


router.delete("/home", (req,res)=>{
    
})


router.get("/customer", (req,res)=>{

 CustomerModel.find()
  .then((result)=>{
    res.status(200).json(result)
  })
  .catch(err=>{
      console.log(err);
  })
    
})


router.post("/customer", (req,res)=>{
   console.log(req.body);
   
  
  const customerData = new CustomerModel(req.body);
  console.log(customerData);
    customerData.save().then(()=>{
        res.status(200).json({
            message :"saved successfullt"
        })
  })
  .catch((err)=>{
      res.status(500).json({
        error:"there was a server side error"
       
      })
      console.log(err);
    
  })

    
    
})
// (err)=>{
//     if (err) {
//        res.status(500).json({
//            error:"there was a server side error"
          
//          })
//          console.log(err);
   
//     }
//     else{
//        res.status(200).json({
//            error:"success"
          
//          })
//     }
//       })
   //   .t


router.put("/customer/:id", async(req,res)=>{
const{id}= req.params
  const update =  await CustomerModel.findOneAndUpdate({__id:id}, {
        $set:{
            
                name:req.body.name
            
        }},
          {},  
      
        (err)=>{
            if (err) {
                res.status(500).json({
                    message:"error"
                })
                console.log(err);
            }
            else{
                res.status(200).json({
                    message:"thanks for updating"
                })
            }
            
        }

    )
    console.log(update);
    })
 




router.delete("/customer/:id", async(req,res)=>{
    const {id} = req.params;
    await CustomerModel.deleteOne({_id:id},(err)=>{
        if (err) {
            console.log(err);
            res.status(500).json({
                err:"err"
            })
        }
        else{
            res.status(200).json({
                msg:"thanks"
            })
        }
    })
    
})


module.exports = router;

