const HospitalUser = require('../models/hospital');
const Student = require('../models/school');
const Shop = require('../models/shop');
const DailyVisitors = require('../models/dailyVisiter');

const getTodayDate = () => new Date().toISOString().split('T')[0];

const generateOrFetchFixedVisitors = async ({ model, adminId, type }) => {
  const today = getTodayDate();

  // Check if already stored for this admin, type, and date
  let todayEntry = await DailyVisitors.findOne({ adminId, date: today, type });

  if (!todayEntry) {
    // Get total documents for fallback
    const total = await model.countDocuments();
    const sampleSize = Math.min(5, total);

    const randomVisitors = await model.aggregate([{ $sample: { size: sampleSize } }]);

    todayEntry = new DailyVisitors({
      adminId,
      date: today,
      type,
      visitors: randomVisitors
    });

    await todayEntry.save();
  }

  return todayEntry;
};

const searchFilter = (search, visitors) => {
  if (!search) return visitors;

  return visitors.filter(visitor =>
    ['name', 'email', 'phoneNumber'].some(key =>
      visitor[key]?.toLowerCase().includes(search.toLowerCase())
    )
  );
};

// ============================
// Hospital Visitors
// ============================
exports.getHospitalVisitors = async (req, res) => {
  const { adminId, search } = req.query;

  try {
    await generateOrFetchFixedVisitors({
      model: HospitalUser,
      adminId,
      type: 'hospital'
    });

    const all = await DailyVisitors.find({ adminId, type: 'hospital' }).sort({ date: -1 });

    const filtered = all.map(entry => ({
      date: entry.date,
      visitors: searchFilter(search, entry.visitors)
    }));

    res.json({ results: filtered });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching hospital visitors' });
  }
};

// ============================
// School Visitors
// ============================
exports.getSchoolVisitors = async (req, res) => {
  const { adminId, search } = req.query;

  try {
    await generateOrFetchFixedVisitors({
      model: Student,
      adminId,
      type: 'school'
    });

    const all = await DailyVisitors.find({ adminId, type: 'school' }).sort({ date: -1 });

    const filtered = all.map(entry => ({
      date: entry.date,
      visitors: searchFilter(search, entry.visitors)
    }));

    res.json({ results: filtered });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching school visitors' });
  }
};

// ============================
// Shop Visitors
// ============================
exports.getShopVisitors = async (req, res) => {
  const { adminId, search } = req.query;

  try {
    await generateOrFetchFixedVisitors({
      model: Shop,
      adminId,
      type: 'shop'
    });

    const all = await DailyVisitors.find({ adminId, type: 'shop' }).sort({ date: -1 });

    const filtered = all.map(entry => ({
      date: entry.date,
      visitors: searchFilter(search, entry.visitors)
    }));

    res.json({ results: filtered });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching shop visitors' });
  }
};