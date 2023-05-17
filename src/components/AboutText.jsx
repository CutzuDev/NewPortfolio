import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function AboutText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "am a Web Developer.",
        "can build interactive user experiences.",
        "love learning new technologies.",
        "always provide 100% of my experience.",
      ],
      startDelay: 750,
      typeSpeed: 90,
      backSpeed: 90,
      showCursor: false,
      // shuffle: true,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="aboutText--container">
      <span className="about__sub--title">Hey, my name is </span>
      <div className="about__title--anim">
        <h1 className="about__title">Alex Farkas.</h1>
      </div>
      <span className="about__work">
        I <span className="about__work--type" ref={el}></span>{" "}
        <span className="text__cursor">|</span>
      </span>
      <p className="about__para">
        Hello! I'm Alex, I like creating high quality Web Apps.
        <br />
        <br />
        Technology stack:
        <br />
        <span className="text--orange">HTML</span>
        {", "}
        <span className="text--orange">CSS</span>
        {", "}
        <span className="text--orange">Javascript</span>
        {", "}
        <span className="text--orange">Typescript</span>
        {", "}
        <span className="text--orange">Redux</span>
        {", "}
        <span className="text--orange">NextJS</span>
        {", "}
        <span className="text--orange">React</span>
        {", "}
        <span className="text--orange">Firebase</span>
        {", "}
        <span className="text--orange">Tailwind</span>
        {", "}
        <span className="text--orange">Material-UI</span>
        {", "}
        <span className="text--orange">Git</span>
        {", "}
        <span className="text--orange">NPM</span>
        <br />
        <br />
        Currently looking for freelancing opportunities, if interested please
        contact me by{" "}
        {
          <a
            href="mailto:alexfarkasbusiness@gmail.com"
            className="text--orange"
          >
            Clicking Here
          </a>
        }
      </p>
    </div>
  );
}

export default AboutText;
