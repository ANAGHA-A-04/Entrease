const mongoose=require('mongoose');
const adminschema=new mongoose .Schema({
  
    administration:{type:String,required:true},
    administrationname:{type:String,required:true},
    
    password :{type:String,required:true},



});
module.exports=mongoose.model("admin",adminschema,"admin");