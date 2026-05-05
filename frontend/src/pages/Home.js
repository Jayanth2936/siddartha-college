import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h1 style={{ fontSize: "3rem", color: "#004080" }}>Welcome to Siddhartha Degree College</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>Empowering students through quality education and innovation since 1995.</p>
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" 
        alt="College Campus" 
        style={{ width: "100%", maxWidth: "700px", borderRadius: "10px", marginTop: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}

export default Home;