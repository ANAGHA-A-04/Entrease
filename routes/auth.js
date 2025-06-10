const express=require('express');
const router= express.Router();
const{
    userSignup,
    adminSignup,
    userSignin,
    adminSignin,
    superadminSignin
}=require('../controllers/authController');

router.post('/signup/user',userSignup);
router.post('/signup/admin',adminSignup);

router.post('/signin/user',userSignin);
router.post('/signin/admin',adminSignin);
router.post('/signin/superadmin',superadminSignin);

module.exports=router;