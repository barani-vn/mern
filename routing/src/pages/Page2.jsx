function Page2(){
    return(
        <div className="course-page">

      <h1>Explore Our Courses</h1>
      <p className="subtitle">
        Choose your favourite course and start learning today!
      </p>

      <div className="course-container">

        <div className="course-card">
          <h2>Web Development</h2>
          <p>
            Learn HTML, CSS, JavaScript and React
            to build amazing websites.
          </p>
          <button>Apply Now</button>
        </div>

        <div className="course-card">
          <h2>Python Programming</h2>
          <p>
            Learn Python from basics to advanced
            programming concepts.
          </p>
          <button>Apply Now</button>
        </div>

        <div className="course-card">
          <h2>UI/UX Design</h2>
          <p>
            Learn to create beautiful and user-friendly
            website and app designs.
          </p>
          <button>Apply Now</button>
        </div>

      </div>

      <style>{`
        .course-page {
          min-height: 100vh;
          padding: 50px 30px;
          text-align: center;
          background: #f4f7ff;
          font-family: Arial, sans-serif;
        }

        .course-page h1 {
          color: #263b80;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #666;
          font-size: 17px;
          margin-bottom: 40px;
        }

        .course-container {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .course-card {
          background: white;
          width: 250px;
          padding: 30px 20px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .course-card:hover {
          transform: translateY(-8px);
        }

        .course-card h2 {
          color: #354b9c;
          font-size: 22px;
        }

        .course-card p {
          color: #666;
          line-height: 1.6;
          margin: 20px 0;
        }

        .course-card button {
          background: #536dfe;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 7px;
          cursor: pointer;
          font-size: 15px;
        }

        .course-card button:hover {
          background: #354bcb;
        }
      `}</style>

    </div>
  );
}

export default Page2;