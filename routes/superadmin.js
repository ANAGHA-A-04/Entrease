const express = require('express');
const router = express.Router();
const {
  getHospitalCount,
  getSchoolCount,
  getShopCount,
  getAllHospitalAdmins,
  getAllSchoolAdmins,
  getAllShopAdmins,
  getAllVisitorsByType
} = require('../controllers/superadminControllerr');

// Counts
router.get('/count/hospital', getHospitalCount);
router.get('/count/school', getSchoolCount);
router.get('/count/shop', getShopCount);

// Admins
router.get('/admins/hospital', getAllHospitalAdmins);
router.get('/admins/school', getAllSchoolAdmins);
router.get('/admins/shop', getAllShopAdmins);

// Visitors
router.get('/visitors/all/:type', getAllVisitorsByType); // type: hospital, school, shop

module.exports = router;