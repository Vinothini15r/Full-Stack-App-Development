// ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS file for styling if needed
import videoSrc from '../../assets/vid1.mp4';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a password reset email
      const response = await fetch('your-api-endpoint/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSuccessMessage('Password reset email sent successfully.');
        setEmail('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to send password reset email. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Failed to send password reset email. Please try again later.');
    }
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">Reset Password</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="back-button" onClick={() => window.location.href = '/project/login'}>Back to Login</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
