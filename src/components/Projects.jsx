import "./Components.css";
import ProjectFeaturedItem from "./ProjectFeaturedItem";
import ProjectOtherItem from "./ProjectOtherItem";
// import ecom from "../assets/ecom.png";
// import googleclone from "../assets/googleclone.png";
// import gmailclone from "../assets/gmailclone.png";
// import notflixreact from "../assets/notflixreact.png";

import {
  ProjectsMain as MainList,
  ProjectsSecondary as SecondaryList,
} from "./Lists";

function Projects() {
  return (
    <section id="projects">
      <div className="section__title">
        <span className="section__title--number text--orange">02.</span>
        <h1 className="section__title--text">Some Of My Work</h1>
        <div className="section__title--line"></div>
      </div>
      <div className="projects__features">
        {MainList.map((item, index) => (
          <ProjectFeaturedItem
            orientation={item.orientation}
            title={item.title}
            para={item.para}
            techs={item.techs}
            gLink={item.gLink}
            sLink={item.sLink}
            image={item.image}
            key={index}
          />
        ))}
      </div>

      <div className="section__title spe3">
        <div className="section__title--line spe2"></div>
        <h1 className="section__title--text spe1">
          Other Interesting Projects
        </h1>
        <div className="section__title--line spe2"></div>
      </div>
      <div className="projects__others">
        {SecondaryList.map((item, index) => (
          <ProjectOtherItem
            title={item.title}
            para={item.para}
            techs={item.techs}
            gLink={item.gLink}
            sLink={item.sLink}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
