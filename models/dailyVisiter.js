const mongoose = require('mongoose');

const dailyVisitorsSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true
  },
  date: {
    type: String, // Format: "YYYY-MM-DD"
    required: true
  },
  type: {
    type: String, // 'hospital' | 'school' | 'shop'
    required: true
  },
  visitors: {
    type: Array,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('DailyVisitors', dailyVisitorsSchema);