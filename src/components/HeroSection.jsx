import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from "../assets/heroImg.png";
import '../App.css';
import Header from './Header';

function HeroSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login-section');
  };

  const handleHowItWorks = () => {
    navigate('/about')
  }

  return (
    <>
    <Header/>
    <div className="hero-section-custom">
    <div className="hero-image-custom">
        <img src={heroImg} alt="project management Management" />
      </div>
      <div className="hero-text-custom">
        <h1>Effortless Project Management Made Simple</h1>
        <p>Take control of your projects with our cutting-edge platform, designed to streamline your administrative tasks. Whether you're a student or a teacher, our solution enhances productivity and keeps all your records organized, ensuring a smooth and efficient experience.</p>
        <div className="hero-buttons-custom">
          <button className="btn-teacher-custom" onClick={handleLogin}>Login</button>
          <button className="btn-teacher-custom" onClick={handleHowItWorks} >More Info</button>

        </div>
      </div>
    </div>
     </>
  );
}

export default HeroSection;