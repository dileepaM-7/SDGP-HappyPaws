import React from "react";
import './Contact.css';


export const Contact = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, please feel free to reach out to
        us using the form below.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
