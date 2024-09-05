import React, { useState, useRef } from 'react';
import './AboutPage.css';
import Header from '../components/Header';

function AboutPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const emailInput = formRef.current.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsSubscribed(true);
          form.reset();
        } else {
          alert('Subscription failed. Please try again.');
        }
      })
      .catch(() => alert('Subscription failed. Please try again.'));
  };

  return (
    <>
     <Header/>
    
    <div className="about-page-container">
      <section className="about-section">
        <h2>Our Purpose</h2>
        <p>We aim to deliver a cutting-edge solution for efficient project task management. The Countdown Board for Project Management is designed to simplify workflows by organizing tasks into clear, actionable sections, helping teams stay focused on deadlines and goals. With a user-friendly interface and robust features, our mission is to boost productivity and ensure seamless project execution.</p>
      </section>

      <section className="about-section">
        <h2>Countdown Board Features</h2>
        <div className="features-container">
          <ul className="features-list">
            <li>Three Sections for Task Management: To Do, In Progress, Completed</li>
            <li>Drag-and-Drop Functionality for Easy Task Movement</li>
            <li>Task History Tracking for Progress Monitoring</li>
            <li>User Authentication for Secure Access</li>
            <li>Responsive Design for Web and Mobile Use</li>
          </ul>
        </div>
      </section>
      
      <footer className="about-footer">
        <p>&copy; 2024 Countdown Board. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default AboutPage;