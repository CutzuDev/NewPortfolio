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
        Hello! My name is Alex and I love creating things for the internet. My
        interest in web develpment started in 2021, but I have only started
        learning in the summer of 2022. So far I have learned{" "}
        <span className="text--orange">HTML</span>,{" "}
        <span className="text--orange">CSS</span>,{" "}
        <span className="text--orange">JavaScript</span> and{" "}
        <span className="text--orange">React</span>, but I'm planning to expand
        my knowledge to other frameworks like{" "}
        <span className="text--orange">Vue</span> or{" "}
        <span className="text--orange">Angular</span>. I would also like to
        expand my knowledge to other stuff like{" "}
        <span className="text--orange">Python</span> and{" "}
        <span className="text--orange">C++</span>. I currently live in
        Romania, trying to prepare myself for future interviews.
      </p>
    </div>
  );
}

export default AboutText;
