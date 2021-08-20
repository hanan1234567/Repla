const express=require("express");
const router=express.Router();
require("../src/db/connection");
const feedback=require("../src/db/feedback")
router.post("/feedback",async (req,res)=>{
    const {name,company,email,subject,message}=req.body;
    if(!name || !company || !email || !subject || !message)
    res.status(422).json({error:"Please fill the fields properly"})
    try
    {
                let data=new feedback(req.body);
                data.save().then(()=>{ res.status(201).json({message:"Sucessfully register"});}).catch(()=>{res.status(500).json({error:"Server Error"})})          
    }
    catch(err)
    {
        console.log("Error")
    }
})
  
  module.exports = router; 