const mongoose=require('mongoose');
const adminschema=new mongoose .Schema({
  
    administration:{type:String,required:true},
    administrationName:{type:String,required:true},
    
    password :{type:String,required:true},



});
module.exports=mongoose.model("Admin",adminschema,"admin");