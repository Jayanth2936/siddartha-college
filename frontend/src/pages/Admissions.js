import React, { useState } from 'react';

function Admissions() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application for ${formData.name} submitted! (We will connect this to your database next)`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#004080" }}>Admissions Open for 2026</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "30px auto", gap: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "bold" }}>Full Name:</label>
        <input type="text" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, name: e.target.value})} />
        
        <label style={{ fontWeight: "bold" }}>Email Address:</label>
        <input type="email" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, email: e.target.value})} />
        
        <label style={{ fontWeight: "bold" }}>Select Course:</label>
        <select required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, course: e.target.value})}>
          <option value="">-- Choose a Course --</option>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Com">B.Com</option>
          <option value="B.A">B.A</option>
        </select>

        <button type="submit" style={{ padding: "15px", marginTop: "10px", backgroundColor: "#004080", color: "white", border: "none", borderRadius: "5px", fontSize: "1.1rem", cursor: "pointer", fontWeight: "bold" }}>Submit Application</button>
      </form>
    </div>
  );
}

export default Admissions;