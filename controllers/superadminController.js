const Admin = require('../models/admin');
const DailyVisitor = require('../models/dailyVisiter');

// Get count of admins by type
exports.getHospitalCount = async (req, res) => {
  try {
    const count = await Admin.countDocuments({ administration: 'hospital' });
    res.json({ administration: 'hospital', count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSchoolCount = async (req, res) => {
  try {
    const count = await Admin.countDocuments({ administartion: 'school' });
    res.json({ administration: 'school', count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getShopCount = async (req, res) => {
  try {
    const count = await Admin.countDocuments({ administration: 'shop' });
    res.json({ administration: 'shop', count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all admins by type
exports.getAllHospitalAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ administartion: 'hospital' });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSchoolAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ type: 'school' });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllShopAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ type: 'shop' });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all visitors grouped by type
exports.getAllVisitorsByType = async (req, res) => {
  const { type } = req.params;
  try {
    const visitors = await DailyVisitor.find({ type }).sort({ date: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};