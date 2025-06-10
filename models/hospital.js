const mongoose = require('mongoose');
const hospitalschema = new mongoose.hospitalschema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'other'],
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        match: /^[0-9]{10}$/
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/\S+@\S+\.\S+/
    },
    bloodGroup:{
        type:String,
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required:true
    },
    guardianName:{
        type:String,
        required:true,
    },
    guardianNumber:{
        type:String,
        required:true,
        match:/^[0-9]{10}$/
    }
},{ timestamps: true});
module.exports = mongoose.model('HospitalUser',hospitalschema,"hospital");