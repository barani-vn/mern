
import React from "react";

function Page5() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="subtitle">
        Have any questions? We'd love to hear from you!
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>📧 Email: info@learnhub.com</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>📍 Address: Chennai, Tamil Nadu</p>

          <h3>We're Here to Help!</h3>
          <p>
            Contact us for course details, admissions
            and any other queries.
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button>Submit</button>
        </div>

      </div>

      <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 50px 30px;
          text-align: center;
          background: #f4f7ff;
          font-family: Arial, sans-serif;
        }

        .contact-page h1 {
          color: #263b80;
          font-size: 36px;
        }

        .subtitle {
          color: #666;
          font-size: 17px;
          margin-bottom: 40px;
        }

        .contact-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 30px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: auto;
        }

        .contact-info {
          background: #536dfe;
          color: white;
          padding: 30px;
          border-radius: 15px;
          width: 300px;
          text-align: left;
        }

        .contact-info h2 {
          margin-bottom: 25px;
        }

        .contact-info p {
          line-height: 1.8;
        }

        .contact-form {
          background: white;
          padding: 30px;
          border-radius: 15px;
          width: 350px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .contact-form h2 {
          color: #354b9c;
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 7px;
          box-sizing: border-box;
          font-size: 15px;
        }

        .contact-form textarea {
          height: 100px;
          resize: none;
        }

        .contact-form button {
          width: 100%;
          padding: 12px;
          background: #536dfe;
          color: white;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          font-size: 16px;
        }

        .contact-form button:hover {
          background: #354bcb;
        }
      `}</style>

    </div>
  );
}

export default Page5;
