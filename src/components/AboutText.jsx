import { useEffect, useRef } from "react";
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
      <h3 className="about__sub--title">Hey, my name is </h3>
      <div className="about__title--anim">
        <h1 className="about__title">Alex Farkas.</h1>
      </div>
      <h1 className="about__work">
        I <span className="about__work--type" ref={el}></span>{" "}
        <span className="text__cursor">|</span>
      </h1>
      <p className="about__para">
        I'm a self taught Frontend Developer who creates impresive user
        experiences. Currently I'm learning React and using it to expand my work
        portfolio.
      </p>
    </div>
  );
}

export default AboutText;
