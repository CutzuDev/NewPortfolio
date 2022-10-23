import AboutMe from "../components/AboutMe";
import Sides from "../components/Sides";
import TestComp from "../components/TestComp";
import "./Pages.css";

function Home() {
  return (
    <div className="home">
      <Sides />
      <AboutMe />
      <TestComp />
    </div>
  );
}

export default Home;
