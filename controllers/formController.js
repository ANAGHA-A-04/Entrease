
const hospitalvisitor = require('../models/hospital');
const schoolvisitor=require('../models/school');
const shopvisitor=require('../models/shop');

exports.submithospital=async(req,res)=>{
    const{name,age,gender, phoneNumber,email,bloodGroup,guardianName,guardianNumber} =req.body;
    try{
        const visit = new hospitalvisitor({name,age,gender,phoneNumber,email,bloodGroup,guardianName,guardianNumber});
        await visit.save();
        res.status(201).json({msg:'hospital visitor recorded',visit});
    }catch(err){
        console.error(err);
        res.status(500).json({msg:'failed to record hospital visit'});
    }

    
};
exports.submitschool=async(req,res)=>{
    const{ name,DOB,gender,std,address,guardian,relation,phone}= req.body;
    try{
        const visit = new schoolvisitor({name,DOB,gender,class:std,address,guardian,relation,phone});
        await visit.save();
        res.status(201).json({msg:'school visitor recorded',visit});
    }catch(err){
        console.error(err);
        res.status(500).json({err,msg:'failed to record school visitor'});
    }
};

exports.submitshop=async(req,res)=>{
    const {name,address,phoneNumber}=req.body;
    try{
        const visit = new shopvisitor({name,address,phoneNumber});
        await visit.save();
        res.status(201).json({msg:'shop visitor recorded',visit});

    }catch(err){
        console.error(err);
        res.status(500).json({msg:'failed to record shop visitor'});
    }
};
