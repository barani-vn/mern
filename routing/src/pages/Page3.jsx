import React from "react";
function Page3(){
    return(
        <div className="trainer-page">

      <h1>Meet Our Trainers</h1>
      <p className="subtitle">
        Learn from experienced trainers and improve your skills.
      </p>

      <div className="trainer-container">

        <div className="trainer-card">
          <div className="trainer-icon">👨‍🏫</div>
          <h2>John Smith</h2>
          <h4>Web Development</h4>
          <p>5 Years of Experience</p>
          <button>View Profile</button>
        </div>

        <div className="trainer-card">
          <div className="trainer-icon">👩‍🏫</div>
          <h2>Sarah Wilson</h2>
          <h4>Python Programming</h4>
          <p>4 Years of Experience</p>
          <button>View Profile</button>
        </div>

        <div className="trainer-card">
          <div className="trainer-icon">👨‍💻</div>
          <h2>David John</h2>
          <h4>UI/UX Design</h4>
          <p>6 Years of Experience</p>
          <button>View Profile</button>
        </div>

      </div>

      <style>{`
        .trainer-page {
          min-height: 100vh;
          padding: 50px 30px;
          text-align: center;
          background: #f4f7ff;
          font-family: Arial, sans-serif;
        }

        .trainer-page h1 {
          color: #263b80;
          font-size: 36px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 40px;
          font-size: 17px;
        }

        .trainer-container {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .trainer-card {
          background: white;
          width: 250px;
          padding: 30px 20px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .trainer-card:hover {
          transform: translateY(-8px);
        }

        .trainer-icon {
          font-size: 55px;
          margin-bottom: 15px;
        }

        .trainer-card h2 {
          color: #354b9c;
        }

        .trainer-card h4 {
          color: #536dfe;
        }

        .trainer-card p {
          color: #777;
          margin: 15px 0;
        }

        .trainer-card button {
          background: #536dfe;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 7px;
          cursor: pointer;
        }

        .trainer-card button:hover {
          background: #354bcb;
        }
      `}</style>

    </div>
  );
}

export default Page3;