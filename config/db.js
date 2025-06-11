const mongoose= require('mongoose');

const connectionString = process.env.DATA;
const connectDB = async()=>{
    try{
        await mongoose.connect(connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB Error", err));

    }catch(err){
        console.log('Mongodb Connection Failed:',error.message);
        process.exit(1);
    }
};
module.exports =connectDB;