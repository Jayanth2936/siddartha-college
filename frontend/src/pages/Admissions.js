import React, { useState } from 'react';

function Admissions() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // ⚠️ Use your Back4App URL here. 
      const response = await fetch("https://siddarthacollegebackend-s0ywgf0j.b4a.run/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("✅ Application sent to siddharthagroup.org@gmail.com!");
        setFormData({ name: "", email: "", course: "" });
      } else {
        setStatus("❌ Failed to send. Check backend.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Connection error.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#004080" }}>Admissions Open for 2026</h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "30px auto", gap: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "bold" }}>Full Name:</label>
        <input type="text" required value={formData.name} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, name: e.target.value})} />
        
        <label style={{ fontWeight: "bold" }}>Email Address:</label>
        <input type="email" required value={formData.email} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, email: e.target.value})} />
        
        <label style={{ fontWeight: "bold" }}>Select Course:</label>
        <select required value={formData.course} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} onChange={e => setFormData({...formData, course: e.target.value})}>
          <option value="">-- Choose a Course --</option>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Com">B.Com</option>
          <option value="B.A">B.A</option>
        </select>

        <button type="submit" style={{ padding: "15px", marginTop: "10px", backgroundColor: "#004080", color: "white", border: "none", borderRadius: "5px", fontSize: "1.1rem", cursor: "pointer", fontWeight: "bold" }}>Submit Application</button>
      </form>

      {status && <p style={{ marginTop: "20px", fontWeight: "bold", color: status.includes("✅") ? "green" : "red" }}>{status}</p>}
    </div>
  );
}

export default Admissions;