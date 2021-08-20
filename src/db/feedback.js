const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
//create collection
const feedback=new mongoose.model("Feedback",schema);
module.exports=feedback;
