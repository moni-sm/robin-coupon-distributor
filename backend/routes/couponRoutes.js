const express = require('express');
const Coupon = require('../models/Coupon');
const IP = require('../models/IP');
const router = express.Router();

// Claim Coupon
router.get('/claim', async (req, res) => {
  const userIP = req.ip;

  // Check if the user has claimed a coupon in the last hour
  const lastClaim = await IP.findOne({ ipAddress: userIP, claimedAt: { $gte: new Date(Date.now() - 3600000) } });

  if (lastClaim) {
    const timeRemaining = Math.ceil((3600000 - (Date.now() - lastClaim.claimedAt)) / 60000);
    return res.status(403).json({ message: `You can claim another coupon in ${timeRemaining} minutes.` });
  }

  // Find the next available coupon
  const coupon = await Coupon.findOne({ claimed: false });

  if (!coupon) {
    return res.status(404).json({ message: 'No coupons available.' });
  }

  // Mark the coupon as claimed
  coupon.claimed = true;
  coupon.claimedBy = userIP;
  coupon.claimedAt = new Date();
  await coupon.save();

  // Record the IP address
  await IP.create({ ipAddress: userIP, couponCode: coupon.couponCode, claimedAt: new Date() });

  // Set a cookie to prevent multiple claims from the same browser
  res.cookie('couponClaimed', true, { maxAge: 3600000, httpOnly: true });

  res.json({ message: `Coupon claimed: ${coupon.couponCode}` });
});

module.exports = router;