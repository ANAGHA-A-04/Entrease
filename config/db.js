const mongoose= require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATA)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB Error", err));

    }catch(err){
        console.log('Mongodb Connection Failed:',error.message);
        process.exit(1);
    }
};
module.exports =connectDB;