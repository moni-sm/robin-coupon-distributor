const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true, unique: true },
  claimed: { type: Boolean, default: false },
  claimedBy: { type: String, default: null },
  claimedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Coupon', couponSchema);