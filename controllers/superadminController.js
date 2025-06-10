const hospital = require('../models/hospital');
const HospitalVisitor=require('../models/hospital');
const school = require('../models/school');
const SchoolVistor = require('../models/school');
const shop = require('../models/shop');
const ShopVisitor = require('../models/shop');
//count of hospital visitors
exports.getHospitalCount=async (req,res)=>{
    try{
        const count =await hospital.countDocuments();
        res.json({administration:'hospital',count});
    }catch(err){
        console.error(err);
        res.status(500).json({msg:'Error getting hospital visitor count'});
    }
};
//count of school visitors
exports.getSchoolCount=async(req,res)=>{
    try{
        const count =await school.countDocuments();
        res.json({administration:'school',count});
    }catch(err){
        console.error(err);
        res.status(500).json({msg:'Error getting school visitor count'});
    }
};
//count of shop visitors
exports.getShopCount = async(req,res)=>{
    try{
        const count=await shop.countDocuments();
        res.json({administration:'shop',count});
    }catch(err){
        console.error(err);
        res.status(500).json({msg:'Error getting shop visitor count'});
    }
};