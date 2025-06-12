const mongoose=require("mongoose");
const schoolschema= new mongoose.Schema({
    name:{type:String,required:true},
    DOB:{type:String,required:true},
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },
    cls:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    guardian:{
        type:String,
        required:true
    },
    relation:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        match:[/^[0-9]{10}$/,'phone number must be 10 digits']
    },
}, { timestamps: true });
module.exports=mongoose.model("student",schoolschema,"school");