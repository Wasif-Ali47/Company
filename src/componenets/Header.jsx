import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "fixed",
        top: show ? "0" : "-100px",
        left: 0,
        right: 0,
        transition: "top 0.3s ease-in-out, background 0.3s ease-in-out",
        zIndex: 1000,
        background: scrolled ? "rgba(0, 0, 0, 0.49)" : "transparent",
        color: "#fff",
        padding: "10px 5%",
      }}
    >
      <div className="brand">
        <div className="logo">YN</div>
        <div>
          <h1>YasnovaX</h1>
          <div className="muted" style={{ fontSize: 12 }}>
            Personal &amp; Company kits
          </div>
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/Demos">Demos</Link></li>
          <li className="nav-item"><Link to="/About Me">About Me</Link></li>
          <li className="nav-item"><Link to="/Pricing">Pricing</Link></li>
          <li className="nav-item"><Link to="/How to Order">How to Order</Link></li>
          <li className="nav-item"><Link to="/Career">Career</Link></li>
        </ul>
        <Link className="btn primary" to="/Get Started">Get Started</Link>
      </div>
    </nav>
  );
}
