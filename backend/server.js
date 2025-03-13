const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const couponRoutes = require('./routes/couponRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "https://robin-coupon-distributor-8jzq.vercel.app", // ✅ Your Vercel frontend URL
  "http://localhost:3000", // ✅ Local development
];

// Enable CORS
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // ✅ Allows cookies/session storage if needed
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://monikasm2019:Monika2001@cluster0.nux2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/coupons', couponRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));