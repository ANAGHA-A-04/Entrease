const express=require('express');
const router = express.Router();
const {
    submithospital,
    submitschool,
    submitshop,
}= require('../controllers/formController');
router.post('/visit/hospital',submithospital);
router.post('/visit/school',submitschool);
router.post('/visit/shop',submitshop);
module.exports=router;