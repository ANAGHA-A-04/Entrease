const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superadminController');

//  Get all admins of a specific type (hospital/school/shop)
router.get('/admins/:type', superAdminController.getAdminsByType);

//  Get today's visitors for a specific admin
router.get('/daily-visitors/:type/:adminId', superAdminController.getAdminVisitorsByDay);

//  Get total counts of all types of administrations
router.get('/admin-counts', superAdminController.getAdminCounts);

module.exports = router;