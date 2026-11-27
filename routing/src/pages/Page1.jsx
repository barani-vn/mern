import React from "react";
function Page1(){
    return(
        <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
            alt="Our team working together"
          />
        </div>

        <div className="about-content">
          <h2>About Us</h2>

          <h1>Learn, Grow and Build Your Future</h1>

          <p>
            We are passionate about helping students develop
            their skills and achieve their goals. Our platform
            provides quality courses, expert guidance, and
            practical learning experiences.
          </p>

          <p>
            Our mission is to make learning simple, accessible,
            and enjoyable for everyone.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
}

export default Page1;


// CSS
const style = document.createElement("style");
style.textContent = `
.about {
  padding: 70px 8%;
  background-color: #f5f7fa;
}

.about-container {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 15px;
}

.about-content {
  flex: 1;
}

.about-content h2 {
  color: #2563eb;
  font-size: 20px;
  margin-bottom: 10px;
}

.about-content h1 {
  font-size: 36px;
  color: #222;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 15px;
}

.about-btn {
  padding: 12px 25px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.about-btn:hover {
  background-color: #1d4ed8;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .about-content h1 {
    font-size: 28px;
  }
}
`;

document.head.appendChild(style);