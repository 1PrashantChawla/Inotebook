const express=require('express'); 
const router=express.Router();

router.get('/',(req,res)=>{

    obj={

        tile:"Note for Homework",
    }
    res.json(obj)
})
module.exports=router;