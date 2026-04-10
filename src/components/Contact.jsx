import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', form);
    
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Me</h1>
        <p>Let's connect and discuss opportunities</p>
      </div>
      <div className="page-content">
        <div className="contact-container">
          <p>Interested in collaboration or have an opportunity? Feel free to reach out!</p>

          {submitted && (
            <div className="success-message">
              ✅ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message ✈️</button>
          </form>

          <div style={{marginTop: '3rem', textAlign: 'center'}}>
            <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>Or contact me directly:</p>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="mailto:gowthumanikantasaranteja@gmail.com" style={{fontSize: '1rem', textDecoration: 'none', color: '#00d4ff'}}>
                📧 gowthumanikantasaranteja@gmail.com
              </a>
              <a href="tel:+919381512689" style={{fontSize: '1rem', textDecoration: 'none', color: '#00d4ff'}}>
                📱 +91 9381512689
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;