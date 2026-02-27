import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  // Show success message temporarily
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6iw9bkt", // Your Service ID
        "template_w5miwal", // Your Template ID
        form.current,
        "vHvEgFXmfs_u2xrL-" // Your Public Key
      )
      .then(
        (result) => {
          setMessageSent(true); // Show message
          e.target.reset(); // Clear form fields

          // Hide message after 3 seconds
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  // Hide success message when user types
  const handleInputChange = () => {
    if (messageSent) setMessageSent(false);
  };

  return (
    <section className="contact-section" id="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2 className="section-title">Contact Me</h2>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleInputChange}
        />
        <button type="submit">Send Message</button>
        {messageSent && (
          <p className="success-msg">Message sent successfully! ✅</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;