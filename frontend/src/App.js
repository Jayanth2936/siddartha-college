import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        
        {/* Navigation Bar */}
        <nav style={{ backgroundColor: "#004080", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
          <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Siddhartha Degree College</h2>
          <div style={{ display: "flex", gap: "25px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1.1rem", fontWeight: "bold" }}>Home</Link>
            <Link to="/courses" style={{ color: "white", textDecoration: "none", fontSize: "1.1rem", fontWeight: "bold" }}>Courses</Link>
            <Link to="/admissions" style={{ color: "white", textDecoration: "none", fontSize: "1.1rem", fontWeight: "bold" }}>Admissions</Link>
            <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "1.1rem", fontWeight: "bold" }}>Contact</Link>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <div style={{ minHeight: "80vh", backgroundColor: "#f9f9f9" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "15px", marginTop: "auto" }}>
          <p style={{ margin: 0 }}>© 2026 Siddartha Degree College. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;