import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error("Error:", err)); // 👈 add this
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Siddartha College</h1>
      <h2>{message || "Loading..."}</h2>
    </div>
  );
}

export default App;