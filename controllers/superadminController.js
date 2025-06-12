const hospital = require('../models/hospital');
const school = require('../models/school');
const shop = require('../models/shop');
const DailyVisitors = require('../models/dailyVisiter');

// 1. Get all admins of a specific type (hospital/school/shop)
exports.getAdminsByType = async (req, res) => {
  const { type } = req.params;

  const modelMap = {
    hospital,
    school,
    shop
  };

  const Model = modelMap[type];
  if (!Model) return res.status(400).json({ msg: 'Invalid type' });

  try {
    const admins = await Model.find({}, '_id administrationName');
    res.json(admins);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching admins' });
  }
};

//  2. Get today's visitors of a specific admin
exports.getAdminVisitorsByDay = async (req, res) => {
  const { type, adminId } = req.params;
  const date = new Date().toISOString().split('T')[0]; // today's date

  try {
    const record = await DailyVisitors.findOne({ type, adminId, date });

    if (!record) {
      return res.json({ count: 0, visitors: [] });
    }

    res.json({
      count: record.visitors.length,
      visitors: record.visitors
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching daily visitors' });
  }
};

//  3. Get total number of hospitals, schools, and shops
exports.getAdminCounts = async (req, res) => {
  try {
    const hospitalCount = await hospital.countDocuments();
    const schoolCount = await school.countDocuments();
    const shopCount = await shop.countDocuments();

    res.json({
      hospital: hospitalCount,
      school: schoolCount,
      shop: shopCount
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error getting admin counts' });
  }
};