const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  couponCode: { type: String, required: true },
  claimedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('IP', ipSchema);