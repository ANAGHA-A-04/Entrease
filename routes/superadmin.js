const express=require('express');
const router=express.Router();
const{
    getHospitalCount,
    getSchoolCount,
    getShopCount
}=require('../controllers/superadminController');
//superadmin route to get visitor counts
router.get('/count/hospital',getHospitalCount);
router.get('/count/school',getSchoolCount);
router.get('/count/shop',getShopCount);
module.exports = router;