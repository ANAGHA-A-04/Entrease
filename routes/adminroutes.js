const express = require('express');
const router = express.Router();
const {
  getHospitalVisitors,
  getSchoolVisitors,
  getShopVisitors
} = require('../controllers/adminController');

// Routes to get visitors filtered by admin and date
router.get('/visitors/hospital', getHospitalVisitors);
router.get('/visitors/school', getSchoolVisitors);
router.get('/visitors/shop', getShopVisitors);

module.exports = router;