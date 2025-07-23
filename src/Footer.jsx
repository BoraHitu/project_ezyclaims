// Footer.jsx
import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} EZYCLAIM. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
