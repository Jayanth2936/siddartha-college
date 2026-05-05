import React from 'react';

function Courses() {
  const courses = ["B.Sc", "B.Com", "B.A"];
  
  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#004080" }}>Our Academic Programs</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
        {courses.map((course, index) => (
          <div key={index} style={{ padding: "30px", width: "250px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", fontSize: "1.2rem", fontWeight: "bold" }}>
            🎓 {course}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;