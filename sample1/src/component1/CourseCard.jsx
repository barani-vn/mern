
function CourseCard({ name, description }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "20px",
      width: "200px",
      borderRadius: "10px",
      textAlign: "center",
      backgroundColor: "lightgreen",
    }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <button>Submit</button>
    </div>
  );
}

export default CourseCard;
