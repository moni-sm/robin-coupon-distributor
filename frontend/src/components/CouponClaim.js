import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const CouponClaim = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const claimCoupon = async () => {
    setIsLoading(true);
    setMessage(''); // Clear previous messages
    setIsError(false);

    try {
      console.log("Attempting to claim coupon...");
      console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

      
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/coupons/claim`, {
        withCredentials: true,
      });

      console.log("API Response:", response.data); // ✅ Log successful response

      if (response.status === 200) {
        setMessage(response.data.message || "Coupon claimed successfully!");
      } else {
        setMessage("Unexpected response from the server.");
        setIsError(true);
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message); // ✅ Log error

      if (error.response) {
        setMessage(error.response.data?.message || "Failed to claim coupon.");
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred!");
      }
      
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="coupon-container">
      <h1>Coupon Distribution</h1>
      <button className="claim-button" onClick={claimCoupon} disabled={isLoading}>
        {isLoading ? 'Claiming...' : 'Claim Coupon'}
      </button>
      {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
    </div>
  );
};

export default CouponClaim;
