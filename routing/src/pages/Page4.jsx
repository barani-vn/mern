import React from "react";

function Page4(){
    return(
         <div className="review-page">

      <h1>What Our Students Say</h1>

      <p className="subtitle">
        Hear from our students about their learning experience.
      </p>

      <div className="review-container">

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            "The web development course was amazing.
            I learned many new skills and built my first website."
          </p>
          <h2>Arun Kumar</h2>
          <h4>Web Development Student</h4>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            "The trainers explained everything clearly.
            Learning Python became very easy for me."
          </p>
          <h2>Priya Sharma</h2>
          <h4>Python Student</h4>
        </div>

        <div className="review-card">
          <div className="stars">★★★★☆</div>
          <p>
            "I really enjoyed the UI/UX course.
            The practical sessions were very helpful."
          </p>
          <h2>Rahul Raj</h2>
          <h4>UI/UX Design Student</h4>
        </div>

      </div>

      <style>{`
        .review-page {
          min-height: 100vh;
          padding: 50px 30px;
          text-align: center;
          background: #f4f7ff;
          font-family: Arial, sans-serif;
        }

        .review-page h1 {
          color: #263b80;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #666;
          font-size: 17px;
          margin-bottom: 40px;
        }

        .review-container {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .review-card {
          background: white;
          width: 250px;
          padding: 30px 20px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .review-card:hover {
          transform: translateY(-8px);
        }

        .stars {
          color: #ffb400;
          font-size: 25px;
          margin-bottom: 15px;
        }

        .review-card p {
          color: #666;
          line-height: 1.6;
          font-size: 15px;
        }

        .review-card h2 {
          color: #354b9c;
          font-size: 20px;
          margin-top: 20px;
        }

        .review-card h4 {
          color: #777;
          font-weight: normal;
        }
      `}</style>

    </div>
  );
}

export default Page4;