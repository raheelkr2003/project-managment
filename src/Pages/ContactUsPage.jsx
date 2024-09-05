import React, { useState, useRef } from 'react';
import './ContactUs.css';
import Header from '../components/Header';

function ContactUsPage() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsMessageSent(true);
          formRef.current.reset();
        } else {
          alert('Message failed to send. Please try again.');
        }
      })
      .catch(() => alert('Message failed to send. Please try again.'));
  };

  return (
    <>
    <Header/>
   
    <div className="contact-us-page">
      <header className="contact-header">
        <p>We're here to help. Reach out to us anytime!</p>
      </header>

      <main className="contact-main">
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleFormSubmit} className="contact-form" ref={formRef}>
             <input type="hidden" name="access_key" value="20e73b59-ab80-4548-91a6-a2e9d6f463a9" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button type="submit">Send</button>
            {isMessageSent && <p className="message-success">Your message has been sent! We will get back to you soon.</p>}
          </form>
        </section>

      </main>
    </div>
     </>
  );
}

export default ContactUsPage;