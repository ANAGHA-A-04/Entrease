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

const HospitalUser = require('../models/hospital');
const school = require('../models/school');
const Shop = require('../models/shop');

// Get all registered users under a given type
exports.getAllRegisteredUsersByType = async (req, res) => {
  const { type } = req.params;

  try {
    let users;

    if (type === 'hospital') {
      users = await HospitalUser.find({});
    } else if (type === 'school') {
      users = await school.find({});
    } else if (type === 'shop') {
      users = await Shop.find({});
    } else {
      return res.status(400).json({ error: 'Invalid type provided' });
    }

    res.json({
      type,
      count: users.length,
      users
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get count and list of visitors by type and date (e.g., for today)
exports.getVisitorsByTypeAndDate = async (req, res) => {
  const { type } = req.params;
  const { date } = req.query; // Optional, defaults to today

  const targetDate = date || new Date().toISOString().split('T')[0];

  try {
    const visitorsForDate = await DailyVisitor.find({ type, date: targetDate });

    let totalCount = 0;
    let allVisitors = [];

    visitorsForDate.forEach(entry => {
      totalCount += entry.visitors.length;
      allVisitors.push(...entry.visitors);
    });

    res.json({
      type,
      date: targetDate,
      count: totalCount,
      visitors: allVisitors,
    });
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