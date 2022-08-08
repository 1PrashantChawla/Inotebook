const express=require('express'); 
const router=express.Router();
const User=require('../models/User')



// create a user using POST endpoint "/api/auth/"   DOESN'T REQUIRE AUTHENTICATION
router.post('/',(req,res)=>{

  const user=User(req.body);
  console.log(req.body);
  user.save();
  res.send(req.body);
  
})
module.exports=router; 
