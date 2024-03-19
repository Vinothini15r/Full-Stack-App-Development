import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Login.css'; 
import videoSrc from '../../assets/vid1.mp4';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>
          <b>Don't have an account? </b><Link to="/project/register"><b>Register</b></Link>
        </p>
        <p>
          <Link to="/project/forgotpassword"><b>Forgot Password?</b></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
