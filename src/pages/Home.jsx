import AboutMe from "../components/AboutMe";
import Sides from "../components/Sides";
import "./Pages.css";

function Home() {
  return (
    <div className="home">
      <Sides />
      <AboutMe />
    </div>
  );
}

export default Home;
