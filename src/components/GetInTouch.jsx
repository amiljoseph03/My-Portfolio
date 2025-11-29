import React from "react";
import "../GetInTouch.css";

export default function GetInTouch() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-sub">
        Feel free to reach out for collaborations or just a friendly chat.
      </p>

      <div className="contact-container">

      
        <div className="contact-info">
          <h3>Contact Details</h3>

          <p><strong>Email:</strong> amiljoseph@gmail.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Kerala, India</p>

          <div className="social-icons">
            <a href="#" target="_blank">🌐</a>
            <a href="#" target="_blank">🐦</a>
            <a href="#" target="_blank">📸</a>
            <a href="#" target="_blank">💼</a>
          </div>
        </div>

     
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
