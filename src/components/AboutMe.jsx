import { useState } from "react";
import AboutText from "./AboutText";
import "./Components.css";

function AboutMe() {
  const [aboutText, setAboutText] = useState();

  setTimeout(() => {
    setAboutText(<AboutText />);
  }, 1750);

  return (
    <div className="aboutme">
      <div className="about__container">{aboutText}</div>
    </div>
  );
}

export default AboutMe;
