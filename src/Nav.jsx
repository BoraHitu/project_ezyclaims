import { Link } from "react-router-dom";
import Logo from "/logo.png";
import "./App.css";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="logo-item">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </li>

        <li className="brand-text">
          <Link to="/" className="t1">
            <div className="brand-lines">
              <span className="str1">EZYCLAIM</span>
              <span>Seamless & Trusted</span>
              <span className="span1">Claim Support</span>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/" className="text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text">
            Login
          </Link>
        </li>
        <li>
          <Link to="/services" className="text">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="text">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
