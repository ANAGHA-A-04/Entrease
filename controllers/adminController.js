const HospitalUser = require('../models/hospital');
const student = require('../models/school');
const Shop = require('../models/shop');

// Hospital visitor list display 
exports.getHospitalVisitors = async (req, res) => {
  const { adminId, date, name } = req.query;

  const filter = { adminId };

  if (name) {
    filter.name = { $regex: name, $options: 'i' }; 
  }

  if (date) {
    filter.createdAt = {
      $gte: new Date(date + "T00:00:00.000Z"),
      $lte: new Date(date + "T23:59:59.999Z")
    };
  }

  try {
    const visitors = await HospitalUser.find(filter).sort({ createdAt: -1 });
    res.json(visitors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching hospital visitors' });
  }
};
//school visitors display
exports.getSchoolVisitors = async (req, res) => {
  const { adminId, date, name } = req.query;

  const filter = { adminId };

  if (name) {
    filter.name = { $regex: name, $options: 'i' };
  }

  if (date) {
    filter.createdAt = {
      $gte: new Date(date + "T00:00:00.000Z"),
      $lte: new Date(date + "T23:59:59.999Z")
    };
  }

  try {
    const visitors = await student.find(filter).sort({ createdAt: -1 });
    res.json(visitors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching school visitors' });
  }
};
//shop visitors display

exports.getShopVisitors = async (req, res) => {
  const { adminId, date, name } = req.query;

  const filter = { adminId };

  if (name) {
    filter.name = { $regex: name, $options: 'i' };
  }

  if (date) {
    filter.createdAt = {
      $gte: new Date(date + "T00:00:00.000Z"),
      $lte: new Date(date + "T23:59:59.999Z")
    };
  }

  try {
    const visitors = await Shop.find(filter).sort({ createdAt: -1 });
    res.json(visitors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching shop visitors' });
  }
};

