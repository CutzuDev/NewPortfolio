import "./Components.css";

import Logo from "../assets/logo.svg";

function Navbar() {
  const nav = document.getElementById(".navbar");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
  });

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="nav__half nav__left">
          <img src={Logo} className="nav__logo hover" />
        </div>
        <div className="nav__half nav__right">
          <ul className="nav__list">
            <li className="nav__item hover">
              <span className="ni__number">01.</span>About
            </li>
            <li className="nav__item hover">
              <span className="ni__number">02.</span>Work
            </li>
            <li className="nav__item hover">
              <span className="ni__number">03.</span>Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
