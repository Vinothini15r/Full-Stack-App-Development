// HomePage.jsx
import React from 'react';
import AdvancedNavbar from './AdvancedNavbar';
import './Homepage.css';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <AdvancedNavbar />
      <div className="hero-section">
        <h1>Welcome to our Well-being Resort</h1>
        <p>Find your balance, relax your mind, and rejuvenate your spirit.</p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="info-section">
        <div className="info-card">
          <h2><i className="fas fa-yoga"></i> Yoga Classes</h2>
          <p>Join our daily yoga classes led by experienced instructors to improve flexibility and inner peace.</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="info-card">
          <h2><i className="fas fa-spa"></i> Spa Treatments</h2>
          <p>Indulge in luxurious spa treatments and massages to pamper yourself and relieve stress.</p>
          <button className="btn">Discover More</button>
        </div>
        <div className="info-card">
          <h2><i className="fas fa-brain"></i> Mindfulness Workshops</h2>
          <p>Participate in mindfulness workshops and meditation sessions for mental clarity and relaxation.</p>
          <button className="btn">Explore Workshops</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
