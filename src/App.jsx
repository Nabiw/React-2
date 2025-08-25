import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Address from "./pages/Address";
import Clock from "./pages/Clock";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <h2 className="logo">🌟 Nabil</h2>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/address">Address</NavLink></li>
            <li><NavLink to="/clock">Clock</NavLink></li>
          </ul>
        </nav>
      </header>

      {/* Pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/address" element={<Address />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
