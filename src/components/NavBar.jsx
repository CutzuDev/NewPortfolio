import "./Components.css";

import Logo from "../assets/logo.svg";
import { useEffect, useRef } from "react";

function Navbar() {
  const navEl = useRef();

  let lastScrollY = window.scrollY;
  function navHideFunc() {
    lastScrollY < window.scrollY
      ? navEl.current.classList.add("nav--hidden")
      : navEl.current.classList.remove("nav--hidden");
    lastScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", navHideFunc);

    return () => {
      window.removeEventListener("scroll", navHideFunc);
    };
  }, []);

  return (
    <nav className="navbar" ref={navEl}>
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
