import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const CouponClaim = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const claimCoupon = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL || "https://robin-coupon-distributor-3.onrender.com"}/api/coupons/claim`, {
        withCredentials: true,
      });
      setMessage(response.data.message);
      setIsError(false);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred!');
      setIsError(true);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="coupon-container">
      <h1>Coupon Distribution</h1>
      <button
        className="claim-button"
        onClick={claimCoupon}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? 'Claiming...' : 'Claim Coupon'}
      </button>
      <p className={`message ${isError ? 'error' : ''}`}>{message}</p>
    </div>
  );
};

export default CouponClaim;