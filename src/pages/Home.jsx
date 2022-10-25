import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Sides from "../components/Sides";
import "./Pages.css";

function Home() {
  return (
    <div className="home">
      <Sides />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Home;
