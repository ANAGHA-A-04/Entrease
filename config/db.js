const mongoose= require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATA,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB Connected');
    }catch(err){
        console.log('Mongodb Connection Failed:',error.message);
        process.exit(1);
    }
};
module.exports =connectDB;