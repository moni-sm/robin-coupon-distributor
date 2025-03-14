

const mongoose = require('mongoose');
const Coupon = require('./models/Coupon');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB for seeding...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define sample coupons
const sampleCoupons = [
  { couponCode: 'COUPON1' },
  { couponCode: 'COUPON2' },
  { couponCode: 'COUPON3' },
  { couponCode: 'COUPON4' },
  { couponCode: 'COUPON5' },
  { couponCode: 'COUPON6' },
  { couponCode: 'COUPON7' },
  { couponCode: 'COUPON8' },
  { couponCode: 'COUPON9' },
  { couponCode: 'COUPON10' },
  { couponCode: 'COUPON11' },

];

// Insert sample coupons into the database
const seedCoupons = async () => {
  try {
    await Coupon.deleteMany({}); // Clear existing coupons
    await Coupon.insertMany(sampleCoupons); // Insert new coupons
    console.log('Coupons seeded successfully!');
  } catch (err) {
    console.error('Error seeding coupons:', err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
};

// Run the seeding function
seedCoupons();