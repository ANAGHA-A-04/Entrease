const mongoose= require('mongoose');
const shopSchema= new mongoose.Schema({
 name:{type: String,required:true},
 address:{type:String,required:true},
 phoneNumber:{type:String,required:true,match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
}
},
{timestamps:true});
module.exports=mongoose.model('Shop',shopSchema);