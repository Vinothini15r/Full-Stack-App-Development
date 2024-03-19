import React, { useState } from 'react';
import './Register.css'; 
import videoSrc from '../../assets/vid1.mp4';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleLoginClick = () => {
    // Navigate to the Login page
    window.location.href = '/project/login';
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="register-form-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && formData.username === '' && <div className="error-popup">{errors.username}</div>}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && formData.email === '' && <div className="error-popup">{errors.email}</div>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && formData.password === '' && <div className="error-popup">{errors.password}</div>}
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && formData.confirmPassword === '' && <div className="error-popup">{errors.confirmPassword}</div>}
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <p><b>Already have an account? </b><button onClick={handleLoginClick}>Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
