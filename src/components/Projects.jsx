import "./Components.css";
import ProjectFeaturedItem from "./ProjectFeaturedItem";
import ProjectOtherItem from "./ProjectOtherItem";

function Projects() {
  return (
    <section id="projects">
      <div className="section__title">
        <span className="section__title--number text--orange">02.</span>
        <h1 className="section__title--text">Some Of My Work</h1>
        <div className="section__title--line"></div>
      </div>
      <div className="projects__features">
        <ProjectFeaturedItem
          orientation={"projectItemReverse"}
          title={"Marian"}
          para={"Lorem lorem lorem lorem"}
          techs={["Marian", "Alex", "Tech123"]}
          gLink={"https://youtube.com"}
          sLink={"https://youtube.com"}
        />
        <ProjectFeaturedItem
          title={"Marian"}
          para={"Lorem lorem lorem lorem"}
          techs={["Marian", "Alex"]}
          gLink={"https://youtube.com"}
          sLink={"https://youtube.com"}
        />
        <ProjectFeaturedItem
          orientation={"projectItemReverse"}
          title={"Marian"}
          para={"Lorem lorem lorem lorem"}
          techs={["Marian", "Alex"]}
          gLink={"https://youtube.com"}
          sLink={"https://youtube.com"}
        />
      </div>

      <div className="section__title spe3">
        <div className="section__title--line spe2"></div>
        <h1 className="section__title--text spe1">
          Other Interesting Projects
        </h1>
        <div className="section__title--line spe2"></div>
      </div>
      <div className="projects__others">
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
        <ProjectOtherItem />
      </div>
    </section>
  );
}

export default Projects;
