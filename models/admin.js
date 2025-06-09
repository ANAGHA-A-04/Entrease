const mongoose=require('mongoose');
const adminschema=new mongoose .Schema({
    administrationname:{type:String,required:true},
    administration:{type:String,required:true},
    
    password :{type:String,required:true},



});
module.exports=mongoose.model("admin",adminschema,"admin");