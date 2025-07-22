import "./App.css";
import Logo from "/logo.png";
function Nav() {
  return (
    <>
      <nav>
        <ul className="list-none">
          <a>
            <img href="" src={Logo}></img>
          </a>
          <a className="t1" href="">
            <span>
              <span class="str1">EZYCLAIM</span>
            </span>
            <span>Seamless & Trusted</span>
            <span class="span1">Claim Support</span>
          </a>
          <a href="" className="text">
            Home
          </a>
          <a href="" className="text">
            Login
          </a>
          <a href="" className="text">
            Services
          </a>
          <a href="" className="text">
            About
          </a>
          <a href="" className="text">
            Contact
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
