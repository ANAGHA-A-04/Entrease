const express = require('express');
const router = express.Router();
const {
  getHospitalCount,
  getSchoolCount,
  getShopCount,
  getAllHospitalAdmins,
  getAllSchoolAdmins,
  getAllShopAdmins,
  getAllVisitorsByType,
  getVisitorsByTypeAndDate,
  getAllRegisteredUsersByType
} = require('../controllers/superadminController');

// Counts
router.get('/count/hospital', getHospitalCount);
router.get('/count/school', getSchoolCount);
router.get('/count/shop', getShopCount);

// Admins
router.get('/admins/hospital', getAllHospitalAdmins);
router.get('/admins/school', getAllSchoolAdmins);
router.get('/admins/shop', getAllShopAdmins);

//today's visitors count
router.get('/visitors/by-date/:type', getVisitorsByTypeAndDate);

//  All registered users
router.get('/registered-users/:type', getAllRegisteredUsersByType);

// Visitors
router.get('/visitors/all/:type', getAllVisitorsByType); // type: hospital, school, shop

module.exports = router;