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
      <h3 className="about__sub--title">Hey, my name is </h3>
      <div className="about__title--anim">
        <h1 className="about__title">Alex Farkas.</h1>
      </div>
      <h1 className="about__work">
        I <span className="about__work--type" ref={el}></span>{" "}
        <span className="text__cursor">|</span>
      </h1>
      <p className="about__para">
        Hello! My name is Alex and I love creating interactive Web Apps. I
        started my Web Development carrier in the summer of 2022. So far I've
        learned <span className="text--orange">HTML</span>,{" "}
        <span className="text--orange">CSS</span>,{" "}
        <span className="text--orange">JavaScript</span> and{" "}
        <span className="text--orange">React.js</span>, but I'm planning to
        expand my knowledge to other frameworks, next one being{" "}
        <span className="text--orange">Next.js</span>. I would also like to
        learn other programming languages for example{" "}
        <span className="text--orange">Python</span> and{" "}
        <span className="text--orange">C++</span>. Currently looking for
        freelancing opportunities, if interested please contact me by{" "}
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
